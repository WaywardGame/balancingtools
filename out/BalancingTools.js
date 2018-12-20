var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "./action/IAction", "./action/SetDifficulty", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./BalancingToolsPanel", "./IBalancingTools"], function (require, exports, IHookHost_1, Mod_1, ModRegistry_1, IAction_1, SetDifficulty_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, BalancingToolsPanel_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BalancingTools extends Mod_1.default {
        canCreatureMove(creature, tile, x, y, z, moveType) {
            if (this.saveData.freezeCreatures) {
                return false;
            }
            return undefined;
        }
    }
    __decorate([
        Mod_1.default.instance("Debug Tools")
    ], BalancingTools.prototype, "DEBUG_TOOLS", void 0);
    __decorate([
        ModRegistry_1.default.interModRegistration("Debug Tools", "MainDialogPanel", BalancingToolsPanel_1.default)
    ], BalancingTools.prototype, "balancingToolsPanel", void 0);
    __decorate([
        ModRegistry_1.default.dictionary("BalancingTools", IBalancingTools_1.BalancingToolsTranslation)
    ], BalancingTools.prototype, "dictionary", void 0);
    __decorate([
        ModRegistry_1.default.dictionary("Difficulty", IBalancingTools_1.Difficulty)
    ], BalancingTools.prototype, "dictionaryDifficulty", void 0);
    __decorate([
        Mod_1.default.saveData(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], BalancingTools.prototype, "saveData", void 0);
    __decorate([
        ModRegistry_1.default.registry(IAction_1.default)
    ], BalancingTools.prototype, "actions", void 0);
    __decorate([
        ModRegistry_1.default.action("ToggleCreaturesFrozen", ToggleCreaturesFrozen_1.default)
    ], BalancingTools.prototype, "actionToggleCreaturesFrozen", void 0);
    __decorate([
        ModRegistry_1.default.action("SetDifficulty", SetDifficulty_1.default)
    ], BalancingTools.prototype, "actionSetDifficulty", void 0);
    __decorate([
        ModRegistry_1.default.action("SpawnCreatureLine", SpawnCreatureLine_1.default)
    ], BalancingTools.prototype, "actionSpawnCreatureLine", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], BalancingTools.prototype, "canCreatureMove", null);
    __decorate([
        Mod_1.default.instance(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], BalancingTools, "INSTANCE", void 0);
    exports.default = BalancingTools;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBa0JBLE1BQXFCLGNBQWUsU0FBUSxhQUFHO1FBMkN2QyxlQUFlLENBQUMsUUFBbUIsRUFBRSxJQUFXLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsUUFBa0I7WUFDM0csSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDYjtZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7S0FDRDtJQTVDQTtRQURDLGFBQUcsQ0FBQyxRQUFRLENBQWEsYUFBYSxDQUFDO3VEQUNBO0lBR3hDO1FBREMscUJBQVEsQ0FBQyxvQkFBb0IsQ0FBaUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLDZCQUFtQixDQUFDOytEQUMzQjtJQUcxRjtRQURDLHFCQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLDJDQUF5QixDQUFDO3NEQUMxQjtJQUV2QztRQURDLHFCQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSw0QkFBVSxDQUFDO2dFQUNHO0lBR2pEO1FBREMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxvQ0FBa0IsQ0FBQztvREFDRztJQUdwQztRQURDLHFCQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFPLENBQUM7bURBQ0g7SUFPeEI7UUFEQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSwrQkFBcUIsQ0FBQzt1RUFDUjtJQUd4RDtRQURDLHFCQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSx1QkFBYSxDQUFDOytEQUNBO0lBR2hEO1FBREMscUJBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsMkJBQWlCLENBQUM7bUVBQ0o7SUFVcEQ7UUFEQyxzQkFBVTt5REFPVjtJQTlDRDtRQURDLGFBQUcsQ0FBQyxRQUFRLENBQUMsb0NBQWtCLENBQUM7MENBQ2U7SUFIakQsaUNBa0RDIn0=