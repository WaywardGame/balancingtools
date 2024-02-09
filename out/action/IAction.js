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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/game/game/entity/action/IAction", "@wayward/game/mod/Mod", "../IBalancingTools"], function (require, exports, IAction_1, Mod_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultUsability = void 0;
    exports.defaultUsability = [IAction_1.ActionUsability.Ghost, IAction_1.ActionUsability.Paused, IAction_1.ActionUsability.Delayed, IAction_1.ActionUsability.Moving];
    class Actions {
    }
    exports.default = Actions;
    __decorate([
        Mod_1.default.instance(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], Actions, "BALANCING_TOOLS", void 0);
    __decorate([
        Mod_1.default.log(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], Actions, "LOG", void 0);
    __decorate([
        Mod_1.default.instance("Debug Tools")
    ], Actions, "DEBUG_TOOLS", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vSUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7Ozs7Ozs7Ozs7O0lBU1UsUUFBQSxnQkFBZ0IsR0FBc0IsQ0FBQyx5QkFBZSxDQUFDLEtBQUssRUFBRSx5QkFBZSxDQUFDLE1BQU0sRUFBRSx5QkFBZSxDQUFDLE9BQU8sRUFBRSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBKLE1BQXFCLE9BQU87S0FPM0I7SUFQRCwwQkFPQztJQUx1QjtRQUR0QixhQUFHLENBQUMsUUFBUSxDQUFpQixvQ0FBa0IsQ0FBQzswQ0FDTTtJQUVoQztRQUR0QixhQUFHLENBQUMsR0FBRyxDQUFDLG9DQUFrQixDQUFDOzhCQUNJO0lBRVQ7UUFEdEIsYUFBRyxDQUFDLFFBQVEsQ0FBYSxhQUFhLENBQUM7c0NBQ08ifQ==