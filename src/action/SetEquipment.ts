import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { Quality } from "@wayward/game/game/IObject";
import { EquipmentSet, equipmentSets } from "../IBalancingTools";
import { defaultUsability } from "./IAction";

export default new Action(ActionArgument.Integer32, ActionArgument.Integer32)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, equipment: EquipmentSet, quality: Quality) => {
		const executor = action.executor;

		const { items } = equipmentSets.get(equipment)!;

		if (items) {
			for (let i = 0; i < items.length; i++) {
				const spawnInfo = items[i];
				const item = executor.createItemInInventory(spawnInfo.itemType, quality);
				if (spawnInfo.equipType) {
					executor.equip(item, spawnInfo.equipType, true);
				}
			}
		}

		action.setPassTurn();
	});
