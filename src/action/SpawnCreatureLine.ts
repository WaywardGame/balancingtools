import { Action } from "game/entity/action/Action";
import { CreatureType } from "game/entity/creature/ICreature";
import { EntityType } from "game/entity/IEntity";
import { TerrainType } from "game/tile/ITerrain";
import Enums from "utilities/enum/Enums";

export default new Action()
	.setUsableBy(EntityType.Player)
	.setHandler(action => {
		const executor = action.executor;

		// Spawn creatures in a line
		for (const creatureType of Enums.values(CreatureType)) {
			const x = executor.x + 2;
			const y = executor.y + creatureType;

			for (var i = -1; i <= 2; i++) {
				const tile = game.getTile(x + i, y, executor.z);
				if (!tile) {
					continue;
				}

				if (tile.doodad) {
					doodadManager.remove(tile.doodad);
				}
				game.changeTile(TerrainType.Dirt, x + i, y, executor.z, false);
			}

			creatureManager.spawn(creatureType, x, y, executor.z, true, undefined, undefined, true);
			creatureManager.spawn(creatureType, x + 1, y, executor.z, true, true, undefined, true);
		}

		renderer?.computeSpritesInViewport();
		action.setUpdateRender();
		action.setUpdateView();
	});
