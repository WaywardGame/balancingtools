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
define(["require", "exports", "@wayward/game/game/IObject", "@wayward/game/game/entity/IHuman", "@wayward/game/language/Dictionary", "@wayward/game/language/Translation", "@wayward/game/language/dictionary/UiTranslation", "@wayward/game/ui/component/Button", "@wayward/game/ui/component/CheckButton", "@wayward/game/ui/component/ContextMenu", "@wayward/game/ui/component/Dropdown", "@wayward/game/ui/component/LabelledRow", "@wayward/game/ui/component/RangeRow", "@wayward/game/ui/input/InputManager", "@wayward/game/utilities/enum/Enums", "@wayward/utilities/Decorators", "@wayward/utilities/collection/Tuple", "./BalancingTools", "./IBalancingTools", "./action/SetEquipment", "./action/SetSkills", "./action/SpawnCreatureLine", "./action/ToggleCreaturesDisableAttack", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsDisableAttack", "./action/ToggleNPCsFrozen"], function (require, exports, IObject_1, IHuman_1, Dictionary_1, Translation_1, UiTranslation_1, Button_1, CheckButton_1, ContextMenu_1, Dropdown_1, LabelledRow_1, RangeRow_1, InputManager_1, Enums_1, Decorators_1, Tuple_1, BalancingTools_1, IBalancingTools_1, SetEquipment_1, SetSkills_1, SpawnCreatureLine_1, ToggleCreaturesDisableAttack_1, ToggleCreaturesFrozen_1, ToggleNPCsDisableAttack_1, ToggleNPCsFrozen_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function translation(entry) {
        return Translation_1.default.get(BalancingTools_1.default.INSTANCE.dictionary, entry);
    }
    const BalancingToolsPanel = function (DebugToolsPanelClass) {
        class BalancingToolsPanelClass extends DebugToolsPanelClass {
            constructor() {
                super();
                new CheckButton_1.CheckButton()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.FreezeCreatures))
                    .setRefreshMethod(() => !!BalancingTools_1.default.INSTANCE.saveData.freezeCreatures)
                    .event.subscribe("toggle", (_, checked) => this.toggleFreezeCreatures(checked))
                    .appendTo(this);
                new CheckButton_1.CheckButton()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.FreezeNPCs))
                    .setRefreshMethod(() => !!BalancingTools_1.default.INSTANCE.saveData.freezeNPCs)
                    .event.subscribe("toggle", (_, checked) => this.toggleFreezeNPCs(checked))
                    .appendTo(this);
                new CheckButton_1.CheckButton()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.DisableAttackCreatures))
                    .setRefreshMethod(() => !!BalancingTools_1.default.INSTANCE.saveData.disableAttackCreatures)
                    .event.subscribe("toggle", (_, checked) => this.toggleDisableAttackCreatures(checked))
                    .appendTo(this);
                new CheckButton_1.CheckButton()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.DisableAttackNPCs))
                    .setRefreshMethod(() => !!BalancingTools_1.default.INSTANCE.saveData.disableAttackNPCs)
                    .event.subscribe("toggle", (_, checked) => this.toggleDisableAttackNPCs(checked))
                    .appendTo(this);
                new Button_1.default()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.SetEquipment))
                    .event.subscribe("activate", this.showEquipmentContextMenu)
                    .appendTo(this);
                new LabelledRow_1.LabelledRow()
                    .classes.add("dropdown-label")
                    .setLabel(label => label.setText(translation(IBalancingTools_1.BalancingToolsTranslation.EquipmentQuality)))
                    .append(this.dropdownItemQuality = new Dropdown_1.default()
                    .setRefreshMethod(() => ({
                    defaultOption: IObject_1.Quality.Random,
                    options: Enums_1.default.values(IObject_1.Quality)
                        .map(quality => (0, Tuple_1.Tuple)(quality, Translation_1.default.get(Dictionary_1.default.Quality, quality)))
                        .map(([id, t]) => (0, Tuple_1.Tuple)(id, (option) => option.setText(t))),
                })))
                    .appendTo(this);
                new RangeRow_1.RangeRow()
                    .setLabel(label => label.setText(translation(IBalancingTools_1.BalancingToolsTranslation.SetSkills)))
                    .editRange(range => range
                    .setMin(0)
                    .setMax(100)
                    .setRefreshMethod(() => localPlayer?.skill.getCore(IHuman_1.SkillType.Tactics) ?? 0))
                    .setDisplayValue(Translation_1.default.ui(UiTranslation_1.default.MenuSharedValuePercentage).get)
                    .event.subscribe("finish", this.setSkills)
                    .appendTo(this);
                new Button_1.default()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.SpawnCreatureLine))
                    .event.subscribe("activate", this.spawnCreatureLine)
                    .appendTo(this);
            }
            getTranslation() {
                return translation(IBalancingTools_1.BalancingToolsTranslation.PanelName);
            }
            toggleFreezeCreatures(freezed) {
                ToggleCreaturesFrozen_1.default.execute(localPlayer, freezed);
            }
            toggleFreezeNPCs(freezed) {
                ToggleNPCsFrozen_1.default.execute(localPlayer, freezed);
            }
            toggleDisableAttackCreatures(disable) {
                ToggleCreaturesDisableAttack_1.default.execute(localPlayer, disable);
            }
            toggleDisableAttackNPCs(disable) {
                ToggleNPCsDisableAttack_1.default.execute(localPlayer, disable);
            }
            showEquipmentContextMenu() {
                const screen = ui.screens.getTop();
                if (!screen) {
                    return;
                }
                const mouse = InputManager_1.default.mouse.position;
                new ContextMenu_1.default(...IBalancingTools_1.equipmentSets.keys()
                    .map(equipment => (0, Tuple_1.Tuple)(IBalancingTools_1.EquipmentSet[equipment], {
                    translation: Translation_1.default.get(BalancingTools_1.default.INSTANCE.dictionaryEquipment, equipment),
                    onActivate: () => this.setEquipment(equipment, this.dropdownItemQuality.selectedOption),
                })))
                    .addAllDescribedOptions()
                    .setPosition(...mouse.xy)
                    .schedule(screen.setContextMenu);
            }
            setEquipment(equipment, selection) {
                SetEquipment_1.default.execute(localPlayer, equipment, selection);
            }
            setSkills(_, value) {
                SetSkills_1.default.execute(localPlayer, value);
            }
            spawnCreatureLine() {
                SpawnCreatureLine_1.default.execute(localPlayer);
            }
        }
        __decorate([
            Decorators_1.Bound
        ], BalancingToolsPanelClass.prototype, "showEquipmentContextMenu", null);
        __decorate([
            Decorators_1.Bound
        ], BalancingToolsPanelClass.prototype, "setSkills", null);
        __decorate([
            Decorators_1.Bound
        ], BalancingToolsPanelClass.prototype, "spawnCreatureLine", null);
        return BalancingToolsPanelClass;
    };
    exports.default = BalancingToolsPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRzs7Ozs7Ozs7OztJQTZCSCxTQUFTLFdBQVcsQ0FBQyxLQUFnQztRQUNwRCxPQUFPLHFCQUFXLENBQUMsR0FBRyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLG9CQUE0QztRQUNqRixNQUFNLHdCQUF5QixTQUFRLG9CQUFvQjtZQUkxRDtnQkFDQyxLQUFLLEVBQUUsQ0FBQztnQkFFUixJQUFJLHlCQUFXLEVBQUU7cUJBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDL0QsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7cUJBQzFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM5RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUkseUJBQVcsRUFBRTtxQkFDZixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUMxRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDckUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJ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