var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "entity/action/IAction", "mod/Mod", "../IBalancingTools"], function (require, exports, IAction_1, Mod_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultUsability = [IAction_1.ActionUsability.Ghost, IAction_1.ActionUsability.Paused, IAction_1.ActionUsability.Delayed, IAction_1.ActionUsability.Moving];
    class Actions {
    }
    __decorate([
        Mod_1.default.instance(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], Actions, "BALANCING_TOOLS", void 0);
    __decorate([
        Mod_1.default.log(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], Actions, "LOG", void 0);
    __decorate([
        Mod_1.default.instance("Debug Tools")
    ], Actions, "DEBUG_TOOLS", void 0);
    exports.default = Actions;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vSUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFRYSxRQUFBLGdCQUFnQixHQUFzQixDQUFDLHlCQUFlLENBQUMsS0FBSyxFQUFFLHlCQUFlLENBQUMsTUFBTSxFQUFFLHlCQUFlLENBQUMsT0FBTyxFQUFFLHlCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFJcEosTUFBcUIsT0FBTztLQU8zQjtJQUxBO1FBREMsYUFBRyxDQUFDLFFBQVEsQ0FBaUIsb0NBQWtCLENBQUM7MENBQ007SUFFdkQ7UUFEQyxhQUFHLENBQUMsR0FBRyxDQUFDLG9DQUFrQixDQUFDOzhCQUNJO0lBRWhDO1FBREMsYUFBRyxDQUFDLFFBQVEsQ0FBYSxhQUFhLENBQUM7c0NBQ087SUFOaEQsMEJBT0MifQ==