define(["require", "exports", "game/entity/action/Action", "game/entity/action/IAction", "game/entity/IEntity", "game/entity/IHuman", "./IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IHuman_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Number)
        .setUsableBy(IEntity_1.EntityType.Player)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, value) => {
        const skillList = [IHuman_1.SkillType.Tactics, IHuman_1.SkillType.Parrying, IHuman_1.SkillType.Marksmanship, IHuman_1.SkillType.Throwing, IHuman_1.SkillType.Anatomy];
        for (const skillType of skillList) {
            action.executor.skill.setCore(skillType, value);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0U2tpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi9TZXRTa2lsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUEsa0JBQWUsSUFBSSxlQUFNLENBQUMsd0JBQWMsQ0FBQyxNQUFNLENBQUM7U0FDOUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsTUFBTSxDQUFDO1NBQzlCLGFBQWEsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO1NBQ2xDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QixNQUFNLFNBQVMsR0FBRyxDQUFDLGtCQUFTLENBQUMsT0FBTyxFQUFFLGtCQUFTLENBQUMsUUFBUSxFQUFFLGtCQUFTLENBQUMsWUFBWSxFQUFFLGtCQUFTLENBQUMsUUFBUSxFQUFFLGtCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekgsS0FBSyxNQUFNLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUMsQ0FBQyxDQUFDIn0=