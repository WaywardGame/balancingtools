var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "event/EventManager", "game/entity/creature/Creature", "game/entity/npc/NPC", "mod/Mod", "mod/ModRegistry", "./action/IAction", "./action/SetEquipment", "./action/SetSkills", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingToolsPanel", "./IBalancingTools"], function (require, exports, EventManager_1, Creature_1, NPC_1, Mod_1, ModRegistry_1, IAction_1, SetEquipment_1, SetSkills_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingToolsPanel_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BalancingTools extends Mod_1.default {
        canCreatureMove(creature, tile, moveType) {
            if (this.saveData.freezeCreatures) {
                return false;
            }
            return undefined;
        }
        canNPCMove(npc, tile, moveType) {
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
        ModRegistry_1.default.dictionary("Equipment", IBalancingTools_1.EquipmentSet)
    ], BalancingTools.prototype, "dictionaryEquipment", void 0);
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
        ModRegistry_1.default.action("SetEquipment", SetEquipment_1.default)
    ], BalancingTools.prototype, "actionSetEquipment", void 0);
    __decorate([
        ModRegistry_1.default.action("SetSkills", SetSkills_1.default)
    ], BalancingTools.prototype, "actionSetSkills", void 0);
    __decorate([
        ModRegistry_1.default.action("SpawnCreatureLine", SpawnCreatureLine_1.default)
    ], BalancingTools.prototype, "actionSpawnCreatureLine", void 0);
    __decorate([
        (0, EventManager_1.EventHandler)(Creature_1.default, "canMove")
    ], BalancingTools.prototype, "canCreatureMove", null);
    __decorate([
        (0, EventManager_1.EventHandler)(NPC_1.default, "canNPCMove")
    ], BalancingTools.prototype, "canNPCMove", null);
    __decorate([
        Mod_1.default.instance(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], BalancingTools, "INSTANCE", void 0);
    exports.default = BalancingTools;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBb0JBLE1BQXFCLGNBQWUsU0FBUSxhQUFHO1FBaUR2QyxlQUFlLENBQUMsUUFBa0IsRUFBRSxJQUFVLEVBQUUsUUFBa0I7WUFDeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDYjtZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7UUFNTSxVQUFVLENBQUMsR0FBUSxFQUFFLElBQVUsRUFBRSxRQUFrQjtZQUN6RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUM3QixPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUVEO0lBL0RnQjtRQURmLGFBQUcsQ0FBQyxRQUFRLENBQWEsYUFBYSxDQUFDO3VEQUNBO0lBR3hCO1FBRGYscUJBQVEsQ0FBQyxvQkFBb0IsQ0FBaUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLDZCQUFtQixDQUFDOytEQUMzQjtJQUcxRTtRQURmLHFCQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLDJDQUF5QixDQUFDO3NEQUMxQjtJQUV2QjtRQURmLHFCQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSw4QkFBWSxDQUFDOytEQUNDO0lBR2hDO1FBRGYsYUFBRyxDQUFDLFFBQVEsQ0FBQyxvQ0FBa0IsQ0FBQztvREFDRztJQUc3QjtRQUROLHFCQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFPLENBQUM7bURBQ0g7SUFPUjtRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLCtCQUFxQixDQUFDO3VFQUNSO0lBR3hDO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsMEJBQWdCLENBQUM7a0VBQ0g7SUFHbkM7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsc0JBQVksQ0FBQzs4REFDQztJQUcvQjtRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxtQkFBUyxDQUFDOzJEQUNJO0lBRzVCO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsMkJBQWlCLENBQUM7bUVBQ0o7SUFVN0M7UUFETixJQUFBLDJCQUFZLEVBQUMsa0JBQVEsRUFBRSxTQUFTLENBQUM7eURBT2pDO0lBTU07UUFETixJQUFBLDJCQUFZLEVBQUMsYUFBRyxFQUFFLFlBQVksQ0FBQztvREFPL0I7SUFoRXNCO1FBRHRCLGFBQUcsQ0FBQyxRQUFRLENBQUMsb0NBQWtCLENBQUM7MENBQ2U7SUFIakQsaUNBcUVDIn0=