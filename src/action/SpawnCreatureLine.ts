/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */

import { Action } from "@wayward/game/game/entity/action/Action";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import Enums from "@wayward/game/utilities/enum/Enums";
import { creatureDescriptions } from "@wayward/game/game/entity/creature/Creatures";
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";

export default new Action()
	.setUsableBy(EntityType.Human)
	.setHandler(action => {
		const executor = action.executor;

		const biomeType = executor.island.biomeType;

		// Spawn creatures in a line in order of spawning rep for the current biome type.
		// if they don't have a spawnsOnAlignment, order if they can spawn in the biome.
		// everyone else goes at the end of the line.
		const creatureTypes = Array.from(Enums.values(CreatureType))
			.sort((creatureA, creatureB) => {
				const creatureASort = creatureDescriptions[creatureA]?.spawn?.[biomeType]?.spawnsOnAlignment ??
					(creatureDescriptions[creatureA]?.spawnGroup?.[biomeType] ? -99998 : -99999);
				const creatureBSort = creatureDescriptions[creatureB]?.spawn?.[biomeType]?.spawnsOnAlignment ??
					(creatureDescriptions[creatureB]?.spawnGroup?.[biomeType] ? -99998 : -99999);
				return creatureBSort - creatureASort;
			});

		let yOffset = 1;
		let addedSpawnsOnRepFence = false;
		let addedspawnGroupFence = false;

		for (const creatureType of creatureTypes) {
			const x = executor.x + 2;
			let y = executor.y + yOffset;

			let createFence = false;

			// add some fences to separate the categories: [ spawnsOnAlignment | spawnGroup | others ]
			if (creatureDescriptions[creatureType]?.spawn?.[biomeType]?.spawnsOnAlignment === undefined) {
				if (!addedSpawnsOnRepFence) {
					addedSpawnsOnRepFence = true;
					createFence = true;

				} else if (!addedspawnGroupFence && creatureDescriptions[creatureType]?.spawnGroup?.[biomeType] === undefined) {
					addedspawnGroupFence = true;
					createFence = true;
				}

				if (createFence) {
					for (var i = -1; i <= 2; i++) {
						const tile = executor.island.getTileSafe(x + i, y, executor.z);
						if (!tile) {
							break;
						}

						if (tile.doodad) {
							executor.island.doodads.remove(tile.doodad);
						}

						tile.changeTile(TerrainType.Dirt, false);
						executor.island.doodads.create(DoodadType.WoodenFence, tile);
					}

					y++;
					yOffset++;
				}
			}

			for (var i = -1; i <= 2; i++) {
				const tile = executor.island.getTileSafe(x + i, y, executor.z);
				if (!tile) {
					break;
				}

				if (tile.doodad) {
					executor.island.doodads.remove(tile.doodad);
				}

				tile.changeTile(TerrainType.Dirt, false);
			}

			executor.island.creatures.spawn(creatureType, executor.island.getTile(x, y, executor.z), true, undefined, undefined, true);
			executor.island.creatures.spawn(creatureType, executor.island.getTile(x + 1, y, executor.z), true, true, undefined, true);

			yOffset++;
		}

		renderers.computeSpritesInViewport(action.executor);
		action.setUpdateRender();
		action.setUpdateView();
	});
