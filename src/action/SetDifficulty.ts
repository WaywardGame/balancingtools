import { Action } from "action/Action";
import { ActionArgument } from "action/IAction";
import { EntityType } from "entity/IEntity";
import { SkillType } from "Enums";
import Heal from "../../../debugtools/out/action/Heal";
import { difficulties, Difficulty } from "../IBalancingTools";
import Actions, { defaultUsability } from "./IAction";

export default new Action(ActionArgument.Number)
	.setUsableBy(EntityType.Player)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, difficulty: Difficulty) => {
		const executor = action.executor;

		// delete all items
		itemManager.removeContainerItems(executor.inventory);

		// refresh stats (via Debug Tools)
		action.get(Actions.DEBUG_TOOLS.actionHeal as any as typeof Heal).execute(localPlayer, executor);

		// Equip and set skill based on input
		const skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Marksmanship, SkillType.Throwing];

		const { items, skill } = difficulties.get(difficulty)!;

		if (items) {
			for (let i = 0; i < items.length; i++) {
				const spawnInfo = items[i];
				const item = executor.createItemInInventory(spawnInfo.itemType);
				if (spawnInfo.equipType) {
					executor.equip(item, spawnInfo.equipType, true);
				}
			}
		}

		for (let i = 0; i < skillList.length; i++) {
			executor.setSkillCore(skillList[i], skill);
		}

		action.setPassTurn();
	});
