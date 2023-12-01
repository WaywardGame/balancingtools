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
define(["require", "exports", "@wayward/game/game/entity/action/Action", "@wayward/game/game/entity/action/IAction", "@wayward/game/game/entity/IEntity", "@wayward/game/game/entity/IHuman", "./IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IHuman_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Float64)
        .setUsableBy(IEntity_1.EntityType.Human)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, value) => {
        const skillList = [IHuman_1.SkillType.Tactics, IHuman_1.SkillType.Parrying, IHuman_1.SkillType.Marksmanship, IHuman_1.SkillType.Throwing, IHuman_1.SkillType.Anatomy, IHuman_1.SkillType.DualWielding];
        for (const skillType of skillList) {
            action.executor.skill.setCore(skillType, value);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0U2tpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi9TZXRTa2lsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7O0lBUUgsa0JBQWUsSUFBSSxlQUFNLENBQUMsd0JBQWMsQ0FBQyxPQUFPLENBQUM7U0FDL0MsV0FBVyxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDO1NBQzdCLGFBQWEsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO1NBQ2xDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QixNQUFNLFNBQVMsR0FBRyxDQUFDLGtCQUFTLENBQUMsT0FBTyxFQUFFLGtCQUFTLENBQUMsUUFBUSxFQUFFLGtCQUFTLENBQUMsWUFBWSxFQUFFLGtCQUFTLENBQUMsUUFBUSxFQUFFLGtCQUFTLENBQUMsT0FBTyxFQUFFLGtCQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakosS0FBSyxNQUFNLFNBQVMsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNuQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDRixDQUFDLENBQUMsQ0FBQyJ9