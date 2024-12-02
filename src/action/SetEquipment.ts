import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionUsability } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import type { Quality } from "@wayward/game/game/IObject";
import type { EquipmentSet } from "../IBalancingTools";
import { equipmentSets } from "../IBalancingTools";

export default new Action(ActionArgument.Integer32, ActionArgument.Integer32)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(ActionUsability.Always)
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
