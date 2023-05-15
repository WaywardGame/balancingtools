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
    exports.default = BalancingTools;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7O0lBeUJILE1BQXFCLGNBQWUsU0FBUSxhQUFHO1FBdUR2QyxlQUFlLENBQUMsUUFBa0IsRUFBRSxJQUFVLEVBQUUsUUFBa0I7WUFDeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsT0FBTyxLQUFLLENBQUM7YUFDYjtZQUVELE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7UUFHTSxTQUFTLENBQUMsS0FBdUI7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFO2dCQUN6QyxPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztRQU1NLFVBQVUsQ0FBQyxHQUFRLEVBQUUsSUFBVSxFQUFFLFFBQWtCO1lBQ3pELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO1FBR00sWUFBWTtZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO0tBRUQ7SUF2RmdCO1FBRGYsYUFBRyxDQUFDLFFBQVEsQ0FBYSxhQUFhLENBQUM7dURBQ0E7SUFHeEI7UUFEZixxQkFBUSxDQUFDLG9CQUFvQixDQUFpQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsNkJBQW1CLENBQUM7K0RBQzNCO0lBRzFFO1FBRGYscUJBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsMkNBQXlCLENBQUM7c0RBQzFCO0lBRXZCO1FBRGYscUJBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLDhCQUFZLENBQUM7K0RBQ0M7SUFHaEM7UUFEZixhQUFHLENBQUMsUUFBUSxDQUFDLG9DQUFrQixDQUFDO29EQUNHO0lBRzdCO1FBRE4scUJBQVEsQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQzttREFDSDtJQU9SO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsK0JBQXFCLENBQUM7dUVBQ1I7SUFHeEM7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSwwQkFBZ0IsQ0FBQztrRUFDSDtJQUduQztRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHNDQUE0QixDQUFDOzhFQUNmO0lBRy9DO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsaUNBQXVCLENBQUM7eUVBQ1Y7SUFHMUM7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsc0JBQVksQ0FBQzs4REFDQztJQUcvQjtRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxtQkFBUyxDQUFDOzJEQUNJO0lBRzVCO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsMkJBQWlCLENBQUM7bUVBQ0o7SUFVN0M7UUFETixJQUFBLDJCQUFZLEVBQUMsa0JBQVEsRUFBRSxTQUFTLENBQUM7eURBT2pDO0lBR007UUFETixJQUFBLDJCQUFZLEVBQUMsa0JBQVEsRUFBRSxXQUFXLENBQUM7bURBT25DO0lBTU07UUFETixJQUFBLDJCQUFZLEVBQUMsYUFBRyxFQUFFLFlBQVksQ0FBQztvREFPL0I7SUFHTTtRQUROLElBQUEsMkJBQVksRUFBQyxhQUFHLEVBQUUsY0FBYyxDQUFDO3NEQU9qQztJQXhGc0I7UUFEdEIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxvQ0FBa0IsQ0FBQzswQ0FDZTtJQUhqRCxpQ0E2RkMifQ==