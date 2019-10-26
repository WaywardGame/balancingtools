define(["require", "exports", "entity/action/Action", "entity/action/IAction", "entity/IEntity", "../action/IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Boolean)
        .setUsableBy(IEntity_1.EntityType.Player)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, frozen) => {
        IAction_2.default.BALANCING_TOOLS.saveData.freezeNPCs = frozen;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlTlBDc0Zyb3plbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vVG9nZ2xlTlBDc0Zyb3plbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFTQSxrQkFBZSxJQUFJLGVBQU0sQ0FBQyx3QkFBYyxDQUFDLE9BQU8sQ0FBQztTQUMvQyxXQUFXLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUM7U0FDOUIsYUFBYSxDQUFDLEdBQUcsMEJBQWdCLENBQUM7U0FDbEMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzlCLGlCQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDIn0=