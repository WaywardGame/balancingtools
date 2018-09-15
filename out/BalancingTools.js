var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "utilities/enum/Enums", "./BalancingToolsPanel", "./IBalancingTools"], function (require, exports, Enums_1, IHookHost_1, Mod_1, ModRegistry_1, Enums_2, BalancingToolsPanel_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function description(name) {
        return { name, usableAsGhost: true, usableWhenPaused: true, ignoreHasDelay: true, ignoreIsMoving: true };
    }
    class BalancingTools extends Mod_1.default {
        canCreatureMove(creature, tile, x, y, z, moveType) {
            if (this.saveData.freezeCreatures) {
                return false;
            }
            return undefined;
        }
        toggleCreaturesFrozen(executor, { object: freezeCreatures }, result) {
            this.saveData.freezeCreatures = freezeCreatures;
        }
        setDifficulty(executor, { object: difficulty }, result) {
            itemManager.removeContainerItems(executor.inventory);
            this.DEBUG_TOOLS.actions.heal(executor, { entity: executor }, result);
            const skillList = [Enums_1.SkillType.Tactics, Enums_1.SkillType.Parrying, Enums_1.SkillType.Marksmanship, Enums_1.SkillType.Throwing];
            const { items, skill } = IBalancingTools_1.difficulties.get(difficulty);
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    const spawnInfo = items[i];
                    const item = executor.createItemInInventory(spawnInfo.itemType);
                    if (spawnInfo.equipType) {
                        executor.equip(item, spawnInfo.equipType, true);
                    }
                }
            }
            for (let i = 0; i < skillList.length; i++) {
                executor.skills[skillList[i]].percent = skill;
                executor.skills[skillList[i]].core = skill;
                executor.skillGain(skillList[i], 0, true);
            }
            result.passTurn = true;
        }
        spawnCreatureLine(executor, { object: freezeCreatures }, result) {
            for (const creatureType of Enums_2.default.values(Enums_1.CreatureType)) {
                const x = executor.x + 2;
                const y = executor.y + creatureType;
                game.changeTile(Enums_1.TerrainType.Dirt, x, y, executor.z, false);
                game.changeTile(Enums_1.TerrainType.Dirt, x + 1, y, executor.z, false);
                creatureManager.spawn(creatureType, x, y, executor.z, true);
                creatureManager.spawn(creatureType, x + 1, y, executor.z, true, true);
            }
            renderer.computeSpritesInViewport();
            result.updateRender = true;
            result.updateView = true;
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
        Mod_1.default.saveData("Balancing Tools")
    ], BalancingTools.prototype, "saveData", void 0);
    __decorate([
        IHookHost_1.HookMethod
    ], BalancingTools.prototype, "canCreatureMove", null);
    __decorate([
        ModRegistry_1.default.action(description("Toggle Creatures Frozen"))
    ], BalancingTools.prototype, "toggleCreaturesFrozen", null);
    __decorate([
        ModRegistry_1.default.action({ name: "Set Difficulty" })
    ], BalancingTools.prototype, "setDifficulty", null);
    __decorate([
        ModRegistry_1.default.action(description("Spawn Creature Line"))
    ], BalancingTools.prototype, "spawnCreatureLine", null);
    __decorate([
        Mod_1.default.instance("Balancing Tools")
    ], BalancingTools, "INSTANCE", void 0);
    exports.default = BalancingTools;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFsYW5jaW5nVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBZ0JBLFNBQVMsV0FBVyxDQUFDLElBQVk7UUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxRyxDQUFDO0lBRUQsTUFBcUIsY0FBZSxTQUFRLGFBQUc7UUEyQnZDLGVBQWUsQ0FBQyxRQUFtQixFQUFFLElBQVcsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxRQUFrQjtZQUMzRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztRQVVNLHFCQUFxQixDQUFDLFFBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUE0QixFQUFFLE1BQXFCO1lBQzNILElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUNqRCxDQUFDO1FBTU0sYUFBYSxDQUFDLFFBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUErQixFQUFFLE1BQXFCO1lBR2pILFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFHckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUd0RSxNQUFNLFNBQVMsR0FBRyxDQUFDLGlCQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsWUFBWSxF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