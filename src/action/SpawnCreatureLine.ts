/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */

import { biomeDescriptions } from "@wayward/game/game/biome/Biomes";
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { Action } from "@wayward/game/game/entity/action/Action";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import Enums from "@wayward/game/utilities/enum/Enums";
import { Tuple } from "@wayward/utilities/collection/Tuple";

function getCreatureSortValue(creature: CreatureType, tiers: CreatureType[][], biome: BiomeType) {
	const tierIndex = tiers.findIndex(tier => tier.includes(creature));
	if (tierIndex >= 0) {
		return tiers.length - tierIndex;
	}

	return -99999;
}

export default new Action()
	.setUsableBy(EntityType.Human)
	.setHandler(action => {
		const executor = action.executor;

		const biomeType = executor.island.biomeType;

		const tiers = Object.entries(biomeDescriptions[biomeType]?.zones?.tiers ?? {})
			.filter(Tuple.filterNullish(1))
			.map(([name, tier]) => Tuple(name, Object.values(tier)
				.flat()
				.flatMap(group => Object.values(group))
				.flat(2)))
			.map(Tuple.getter(1));

		// Spawn creatures in a line in order of creature zone descriptions for the current biome type.
		const creatureTypes = Enums.values(CreatureType)
			.slice()
			.sort((creatureA, creatureB) =>
				getCreatureSortValue(creatureB, tiers, biomeType) - getCreatureSortValue(creatureA, tiers, biomeType));

		let yOffset = 0;
		let addedTiersEndNewline = false;
		let lastTierIndex = -1;
		let x = executor.x + 2;

		for (const creatureType of [...creatureTypes, -1]) {
			let y = executor.y + yOffset;

			function spawnAshLine() {
				for (var i = -2; i <= 3; i++) {
					const tile = executor.island.getTileSafe(x + i, y, executor.z);
					if (!tile) {
						break;
					}

					if (tile.doodad) {
						executor.island.doodads.remove(tile.doodad);
					}

					if (tile.creature) {
						executor.island.creatures.remove(tile.creature);
					}

					tile.changeTile(TerrainType.Ash, false);
				}

				y++;
				yOffset++;
			}

			if (creatureType === -1) {
				spawnAshLine();
				break;
			}

			let createGap = false;
			let newline = false;
			const tierIndex = tiers.findIndex(tier => tier.includes(creatureType));

			if (!tiers.some(tier => tier.includes(creatureType)) && !addedTiersEndNewline) {
				addedTiersEndNewline = true;
				newline = true;
			}

			if (lastTierIndex !== tierIndex) {
				lastTierIndex = tierIndex;
				createGap = true;
			}

			if (createGap || newline) {
				spawnAshLine();
				if (newline) {
					x += 7;
					yOffset = 0;
					y = executor.y;
					spawnAshLine();
				}
			}

			for (var i = -2; i <= 3; i++) {
				const tile = executor.island.getTileSafe(x + i, y, executor.z);
				if (!tile) {
					break;
				}

				if (tile.doodad) {
					executor.island.doodads.remove(tile.doodad);
				}

				if (tile.creature) {
					executor.island.creatures.remove(tile.creature);
				}

				tile.changeTile(i === -2 || i === 3 ? TerrainType.Ash : tierIndex % 2 ? TerrainType.Dirt : TerrainType.BeachSand, false);
			}

			executor.island.creatures.spawn(creatureType, executor.island.getTile(x, y, executor.z), true, undefined, undefined, true);
			executor.island.creatures.spawn(creatureType, executor.island.getTile(x + 1, y, executor.z), true, true, undefined, true);

			yOffset++;
		}

		renderers.computeSpritesInViewport(action.executor);
		action.setUpdateRender();
		action.setUpdateView();
	});
