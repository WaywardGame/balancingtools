define(["require", "exports", "game/entity/action/Action", "game/entity/action/IAction", "game/entity/IEntity", "../action/IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Boolean)
        .setUsableBy(IEntity_1.EntityType.Human)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, disable) => {
        IAction_2.default.BALANCING_TOOLS.saveData.disableAttackCreatures = disable;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlQ3JlYXR1cmVzRGlzYWJsZUF0dGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vVG9nZ2xlQ3JlYXR1cmVzRGlzYWJsZUF0dGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFRQSxrQkFBZSxJQUFJLGVBQU0sQ0FBQyx3QkFBYyxDQUFDLE9BQU8sQ0FBQztTQUMvQyxXQUFXLENBQUMsb0JBQVUsQ0FBQyxLQUFLLENBQUM7U0FDN0IsYUFBYSxDQUFDLEdBQUcsMEJBQWdCLENBQUM7U0FDbEMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQy9CLGlCQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUMifQ==