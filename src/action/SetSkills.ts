import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { defaultUsability } from "./IAction";

export default new Action(ActionArgument.Float64)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, value) => {
		const skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Marksmanship, SkillType.Throwing, SkillType.Anatomy, SkillType.DualWielding];
		for (const skillType of skillList) {
			action.executor.skill.setCore(skillType, value);
		}
	});
