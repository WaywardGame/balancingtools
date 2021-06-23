import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import { EntityType, StatusEffectChangeReason, StatusType } from "game/entity/IEntity";
import { SkillType } from "game/entity/IHuman";
import { IStatMax, Stat } from "game/entity/IStats";
import { difficulties, Difficulty } from "../IBalancingTools";
import { defaultUsability } from "./IAction";

export default new Action(ActionArgument.Number)
	.setUsableBy(EntityType.Player)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, difficulty: Difficulty) => {
		const executor = action.executor;

		// delete all items
		itemManager.removeContainerItems(executor.inventory);

		// TODO: Find a way to import this from Debug Tools
		const health = executor.stat.get<IStatMax>(Stat.Health);
		const stamina = executor.stat.get<IStatMax>(Stat.Stamina);
		const hunger = executor.stat.get<IStatMax>(Stat.Hunger);
		const thirst = executor.stat.get<IStatMax>(Stat.Thirst);

		executor.stat.set(health, executor.asPlayer?.getMaxHealth() ?? health.max);
		if (stamina) executor.stat.set(stamina, stamina.max);
		if (hunger) executor.stat.set(hunger, hunger.max);
		if (thirst) executor.stat.set(thirst, thirst.max);

		executor.setStatus(StatusType.Bleeding, false, StatusEffectChangeReason.Passed);
		executor.setStatus(StatusType.Burned, false, StatusEffectChangeReason.Passed);
		executor.setStatus(StatusType.Poisoned, false, StatusEffectChangeReason.Passed);

		// Equip and set skill based on input
		const skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Marksmanship, SkillType.Throwing, SkillType.Anatomy];

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
			executor.skill.setCore(skillList[i], skill);
		}

		action.setPassTurn();
	});
