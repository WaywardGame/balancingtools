var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "entity/creature/Creature", "entity/npc/NPC", "event/EventManager", "mod/Mod", "mod/ModRegistry", "./action/IAction", "./action/SetDifficulty", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingToolsPanel", "./IBalancingTools"], function (require, exports, Creature_1, NPC_1, EventManager_1, Mod_1, ModRegistry_1, IAction_1, SetDifficulty_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingToolsPanel_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BalancingTools extends Mod_1.default {
        canCreatureMove(creature, tile, x, y, z, moveType) {
            if (this.saveData.freezeCreatures) {
                return false;
            }
            return undefined;
        }
        canNPCMove(npc, tile, x, y, z, moveType) {
            if (this.saveData.freezeNPCs) {
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
        ModRegistry_1.default.action("ToggleNPCsFrozen", ToggleNPCsFrozen_1.default)
    ], BalancingTools.prototype, "actionToggleNPCsFrozen", void 0);
    __decorate([
        ModRegistry_1.default.action("SetDifficulty", SetDifficulty_1.default)
    ], BalancingTools.prototype, "actionSetDifficulty", void 0);
    __decorate([
        ModRegistry_1.default.action("SpawnCreatureLine", SpawnCreatureLine_1.default)
    ], BalancingTools.prototype, "actionSpawnCreatureLine", void 0);
    __decorate([
        EventManager_1.EventHandler(Creature_1.default, "canMove")
    ], BalancingTools.prototype, "canCreatureMove", null);
    __decorate([
        EventManager_1.EventHandler(NPC_1.default, "canMove")
    ], BalancingTools.prototype, "canNPCMove", null);
    __decorate([
        Mod_1.default.instance(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], BalancingTools, "INSTANCE", void 0);
    exports.default = BalancingTools;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBb0JBLE1BQXFCLGNBQWUsU0FBUSxhQUFHO1FBOEN2QyxlQUFlLENBQUMsUUFBa0IsRUFBRSxJQUFXLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsUUFBa0I7WUFDMUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDYjtZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7UUFNTSxVQUFVLENBQUMsR0FBUSxFQUFFLElBQVcsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxRQUFrQjtZQUMzRixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUM3QixPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUVEO0lBNURBO1FBREMsYUFBRyxDQUFDLFFBQVEsQ0FBYSxhQUFhLENBQUM7dURBQ0E7SUFHeEM7UUFEQyxxQkFBUSxDQUFDLG9CQUFvQixDQUFpQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsNkJBQW1CLENBQUM7K0RBQzNCO0lBRzFGO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsMkNBQXlCLENBQUM7c0RBQzFCO0lBRXZDO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLDRCQUFVLENBQUM7Z0VBQ0c7SUFHakQ7UUFEQyxhQUFHLENBQUMsUUFBUSxDQUFDLG9DQUFrQixDQUFDO29EQUNHO0lBR3BDO1FBREMscUJBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQzttREFDSDtJQU94QjtRQURDLHFCQUFRLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLCtCQUFxQixDQUFDO3VFQUNSO0lBR3hEO1FBREMscUJBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsMEJBQWdCLENBQUM7a0VBQ0g7SUFHbkQ7UUFEQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsdUJBQWEsQ0FBQzsrREFDQTtJQUdoRDtRQURDLHFCQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDJCQUFpQixDQUFDO21FQUNKO0lBVXBEO1FBREMsMkJBQVksQ0FBQyxrQkFBUSxFQUFFLFNBQVMsQ0FBQzt5REFPakM7SUFNRDtRQURDLDJCQUFZLENBQUMsYUFBRyxFQUFFLFNBQVMsQ0FBQztvREFPNUI7SUE3REQ7UUFEQyxhQUFHLENBQUMsUUFBUSxDQUFDLG9DQUFrQixDQUFDOzBDQUNlO0lBSGpELGlDQWtFQyJ9