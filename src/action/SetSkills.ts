/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */

import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import { EntityType } from "game/entity/IEntity";
import { SkillType } from "game/entity/IHuman";
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
