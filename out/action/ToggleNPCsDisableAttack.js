define(["require", "exports", "game/entity/action/Action", "game/entity/action/IAction", "game/entity/IEntity", "../action/IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Boolean)
        .setUsableBy(IEntity_1.EntityType.Human)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, disable) => {
        IAction_2.default.BALANCING_TOOLS.saveData.disableAttackNPCs = disable;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlTlBDc0Rpc2FibGVBdHRhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uL1RvZ2dsZU5QQ3NEaXNhYmxlQXR0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQVFBLGtCQUFlLElBQUksZUFBTSxDQUFDLHdCQUFjLENBQUMsT0FBTyxDQUFDO1NBQy9DLFdBQVcsQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQztTQUM3QixhQUFhLENBQUMsR0FBRywwQkFBZ0IsQ0FBQztTQUNsQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDL0IsaUJBQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQyJ9