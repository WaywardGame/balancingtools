import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import { EntityType } from "game/entity/IEntity";
import { SkillType } from "game/entity/IHuman";
import { defaultUsability } from "./IAction";

export default new Action(ActionArgument.Float64)
	.setUsableBy(EntityType.Player)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, value) => {
		const skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Marksmanship, SkillType.Throwing, SkillType.Anatomy, SkillType.DualWielding];
		for (const skillType of skillList) {
			action.executor.skill.setCore(skillType, value);
		}
	});
