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
define(["require", "exports", "@wayward/game/event/EventManager", "@wayward/game/game/entity/creature/Creature", "@wayward/game/game/entity/npc/NPC", "@wayward/game/mod/Mod", "@wayward/game/mod/ModRegistry", "./action/IAction", "./action/SetEquipment", "./action/SetSkills", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleCreaturesDisableAttack", "./action/ToggleNPCsFrozen", "./action/ToggleNPCsDisableAttack", "./BalancingToolsPanel", "./IBalancingTools"], function (require, exports, EventManager_1, Creature_1, NPC_1, Mod_1, ModRegistry_1, IAction_1, SetEquipment_1, SetSkills_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleCreaturesDisableAttack_1, ToggleNPCsFrozen_1, ToggleNPCsDisableAttack_1, BalancingToolsPanel_1, IBalancingTools_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7O0lBeUJILE1BQXFCLGNBQWUsU0FBUSxhQUFHO1FBdUR2QyxlQUFlLENBQUMsUUFBa0IsRUFBRSxJQUFVLEVBQUUsUUFBa0I7WUFDeEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNuQyxPQUFPLEtBQUssQ0FBQztZQUNkLENBQUM7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO1FBR00sU0FBUyxDQUFDLEtBQXVCO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUMxQyxPQUFPLEtBQUssQ0FBQztZQUNkLENBQUM7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO1FBTU0sVUFBVSxDQUFDLEdBQVEsRUFBRSxJQUFVLEVBQUUsUUFBa0I7WUFDekQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QixPQUFPLEtBQUssQ0FBQztZQUNkLENBQUM7WUFFRCxPQUFPLFNBQVMsQ0FBQztRQUNsQixDQUFDO1FBR00sWUFBWTtZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDckMsT0FBTyxLQUFLLENBQUM7WUFDZCxDQUFDO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUVEO0lBN0ZELGlDQTZGQztJQXZGZ0I7UUFEZixhQUFHLENBQUMsUUFBUSxDQUFhLGFBQWEsQ0FBQzt1REFDQTtJQUd4QjtRQURmLHFCQUFRLENBQUMsb0JBQW9CLENBQWlDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSw2QkFBbUIsQ0FBQzsrREFDM0I7SUFHMUU7UUFEZixxQkFBUSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSwyQ0FBeUIsQ0FBQztzREFDMUI7SUFFdkI7UUFEZixxQkFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsOEJBQVksQ0FBQzsrREFDQztJQUdoQztRQURmLGFBQUcsQ0FBQyxRQUFRLENBQUMsb0NBQWtCLENBQUM7b0RBQ0c7SUFHN0I7UUFETixxQkFBUSxDQUFDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDO21EQUNIO0lBT1I7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSwrQkFBcUIsQ0FBQzt1RUFDUjtJQUd4QztRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLDBCQUFnQixDQUFDO2tFQUNIO0lBR25DO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsc0NBQTRCLENBQUM7OEVBQ2Y7SUFHL0M7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxpQ0FBdUIsQ0FBQzt5RUFDVjtJQUcxQztRQURmLHFCQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxzQkFBWSxDQUFDOzhEQUNDO0lBRy9CO1FBRGYscUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLG1CQUFTLENBQUM7MkRBQ0k7SUFHNUI7UUFEZixxQkFBUSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSwyQkFBaUIsQ0FBQzttRUFDSjtJQVU3QztRQUROLElBQUEsMkJBQVksRUFBQyxrQkFBUSxFQUFFLFNBQVMsQ0FBQzt5REFPakM7SUFHTTtRQUROLElBQUEsMkJBQVksRUFBQyxrQkFBUSxFQUFFLFdBQVcsQ0FBQzttREFPbkM7SUFNTTtRQUROLElBQUEsMkJBQVksRUFBQyxhQUFHLEVBQUUsWUFBWSxDQUFDO29EQU8vQjtJQUdNO1FBRE4sSUFBQSwyQkFBWSxFQUFDLGFBQUcsRUFBRSxjQUFjLENBQUM7c0RBT2pDO0lBeEZzQjtRQUR0QixhQUFHLENBQUMsUUFBUSxDQUFDLG9DQUFrQixDQUFDOzBDQUNlIn0=