import { Action } from "action/Action";
import { EntityType } from "entity/IEntity";
import { CreatureType, TerrainType } from "Enums";
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

			creatureManager.spawn(creatureType, x, y, executor.z, true);
			creatureManager.spawn(creatureType, x + 1, y, executor.z, true, true);
		}

		renderer.computeSpritesInViewport();
		action.setUpdateRender();
		action.setUpdateView();
	});
