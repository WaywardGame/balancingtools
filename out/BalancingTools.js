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
define(["require", "exports", "event/EventManager", "game/entity/creature/Creature", "game/entity/npc/NPC", "mod/Mod", "mod/ModRegistry", "./action/IAction", "./action/SetEquipment", "./action/SetSkills", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleCreaturesDisableAttack", "./action/ToggleNPCsFrozen", "./action/ToggleNPCsDisableAttack", "./BalancingToolsPanel", "./IBalancingTools"], function (require, exports, EventManager_1, Creature_1, NPC_1, Mod_1, ModRegistry_1, IAction_1, SetEquipment_1, SetSkills_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleCreaturesDisableAttack_1, ToggleNPCsFrozen_1, ToggleNPCsDisableAttack_1, BalancingToolsPanel_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BalancingTools extends Mod_1.default {
        canCreatureMove(creature, tile, moveType) {
            if (this.saveData.freezeCreatures) {
                return false;
            }
            return undefined;
        }
        canAttack(enemy) {
            if (this.saveData.disableAttackCreatures) {
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
        canNPCAttack() {
            if (this.saveData.disableAttackNPCs) {
                return false;
            }
            return undefined;
        }
    }
    exports.default = BalancingTools;
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
        ModRegistry_1.default.action("ToggleCreaturesDisableAttack", ToggleCreaturesDisableAttack_1.default)
    ], BalancingTools.prototype, "actionToggleCreaturesDisableAttack", void 0);
    __decorate([
        ModRegistry_1.default.action("ToggleNPCsDisableAttack", ToggleNPCsDisableAttack_1.default)
    ], BalancingTools.prototype, "actionToggleNPCsDisableAttack", void 0);
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
        (0, EventManager_1.EventHandler)(Creature_1.default, "canAttack")
    ], BalancingTools.prototype, "canAttack", null);
    __decorate([
        (0, EventManager_1.EventHandler)(NPC_1.default, "canNPCMove")
    ], BalancingTools.prototype, "canNPCMove", null);
    __decorate([
        (0, EventManager_1.EventHandler)(NPC_1.default, "canNPCAttack")
    ], BalancingTools.prototype, "canNPCAttack", null);
    __decorate([
        Mod_1.default.instance(IBalancingTools_1.BALANCING_TOOLS_ID)
    ], BalancingTools, "INSTANCE", void 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7O0lBeUJILE1BQXFCLGNBQWUsU0FBUSxhQUFHO1FBdUR2QyxlQUFlLENBQUMsUUFBa0IsRUFBRSxJQUFVLEVBQUUsUUFBa0I7WUFDeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDYjtZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7UUFHTSxTQUFTLENBQUMsS0FBdUI7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFO2dCQUN6QyxPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztRQU1NLFVBQVUsQ0FBQyxHQUFRLEVBQUUsSUFBVSxFQUFFLFFBQWtCO1lBQ3pELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO1FBR00sWUFBWTtZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO0tBRUQ7SUE3RkQsaUNBNkZDO0lBdkZnQjtRQURmLGFBQUcsQ0FBQyxRQUFRLENBQWEsYUFBYSxDQUFDO3VEQUNBO0lBR3hCO1FBRGYscUJBQVEsQ0FBQyxvQkFBb0IsQ0FBaUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLDZCQUFtQixDQUFDOytEQUMzQjtJQUcxRTtRQURmLHFCQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLDJDQUF5QixDQUFDO3NEQUMxQjtJQUV2QjtRQURmLHFCQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSw4QkFBWSxDQUFDOytEQUNDO0lBR2hDO1FBRGYsYUFBRyxDQUFDLFFBQVEsQ0FBQyxvQ0FBa0IsQ0FBQztvREFDRztJQUc3QjtRQUROLHFCQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFPLENBQUM7bURBQ0g7SUFPUjtRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLCtCQUFxQixDQUFDO3VFQUNSO0lBR3hDO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsMEJBQWdCLENBQUM7a0VBQ0g7SUFHbkM7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxzQ0FBNEIsQ0FBQzs4RUFDZjtJQUcvQztRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLGlDQUF1QixDQUFDO3lFQUNWO0lBRzFDO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLHNCQUFZLENBQUM7OERBQ0M7SUFHL0I7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsbUJBQVMsQ0FBQzsyREFDSTtJQUc1QjtRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDJCQUFpQixDQUFDO21FQUNKO0lBVTdDO1FBRE4sSUFBQSwyQkFBWSxFQUFDLGtCQUFRLEVBQUUsU0FBUyxDQUFDO3lEQU9qQztJQUdNO1FBRE4sSUFBQSwyQkFBWSxFQUFDLGtCQUFRLEVBQUUsV0FBVyxDQUFDO21EQU9uQztJQU1NO1FBRE4sSUFBQSwyQkFBWSxFQUFDLGFBQUcsRUFBRSxZQUFZLENBQUM7b0RBTy9CO0lBR007UUFETixJQUFBLDJCQUFZLEVBQUMsYUFBRyxFQUFFLGNBQWMsQ0FBQztzREFPakM7SUF4RnNCO1FBRHRCLGFBQUcsQ0FBQyxRQUFRLENBQUMsb0NBQWtCLENBQUM7MENBQ2UifQ==