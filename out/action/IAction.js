var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "game/entity/action/IAction", "mod/Mod", "../IBalancingTools"], function (require, exports, IAction_1, Mod_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultUsability = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vSUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBT2EsUUFBQSxnQkFBZ0IsR0FBc0IsQ0FBQyx5QkFBZSxDQUFDLEtBQUssRUFBRSx5QkFBZSxDQUFDLE1BQU0sRUFBRSx5QkFBZSxDQUFDLE9BQU8sRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBSXBKLE1BQXFCLE9BQU87S0FPM0I7SUFMYztRQURiLGFBQUcsQ0FBQyxRQUFRLENBQWlCLG9DQUFrQixDQUFDOzBDQUNNO0lBRXpDO1FBRGIsYUFBRyxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0IsQ0FBQzs4QkFDSTtJQUVsQjtRQURiLGFBQUcsQ0FBQyxRQUFRLENBQWEsYUFBYSxDQUFDO3NDQUNPO0lBTmhELDBCQU9DIn0=