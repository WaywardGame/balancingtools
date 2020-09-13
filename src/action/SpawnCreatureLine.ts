import { Action } from "entity/action/Action";
import { CreatureType } from "entity/creature/ICreature";
import { EntityType } from "entity/IEntity";
import { TerrainType } from "tile/ITerrain";
import Enums from "utilities/enum/Enums";

export default new Action()
	.setUsableBy(EntityType.Player)
	.setHandler(action => {
		const executor = action.executor;

		// Spawn creatures in a line
		for (const creatureType of Enums.values(CreatureType)) {
			const x = executor.x + 2;
			const y = executor.y + creatureType;

			game.changeTile(TerrainType.Dirt, x, y, executor.z, false);
			game.changeTile(TerrainType.Dirt, x + 1, y, executor.z, false);

			creatureManager.spawn(creatureType, x, y, executor.z, true, undefined, undefined, true);
			creatureManager.spawn(creatureType, x + 1, y, executor.z, true, true, undefined, true);
		}

		renderer?.computeSpritesInViewport();
		action.setUpdateRender();
		action.setUpdateView();
	});
