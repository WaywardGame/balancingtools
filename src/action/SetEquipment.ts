import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import { EntityType } from "game/entity/IEntity";
import { EquipmentSet, equipmentSets } from "../IBalancingTools";
import { defaultUsability } from "./IAction";

export default new Action(ActionArgument.Integer32)
	.setUsableBy(EntityType.Player)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, equipment: EquipmentSet) => {
		const executor = action.executor;

		const { items } = equipmentSets.get(equipment)!;

		if (items) {
			for (let i = 0; i < items.length; i++) {
				const spawnInfo = items[i];
				const item = executor.createItemInInventory(spawnInfo.itemType);
				if (spawnInfo.equipType) {
					executor.equip(item, spawnInfo.equipType, true);
				}
			}
		}

		action.setPassTurn();
	});
