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
define(["require", "exports", "game/entity/IHuman", "language/dictionary/UiTranslation", "language/Translation", "ui/component/Button", "ui/component/CheckButton", "ui/component/ContextMenu", "ui/component/RangeRow", "ui/component/Dropdown", "ui/input/InputManager", "utilities/collection/Tuple", "utilities/Decorators", "./action/SetEquipment", "./action/SetSkills", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingTools", "./IBalancingTools", "ui/component/LabelledRow", "game/IObject", "language/Dictionary", "utilities/enum/Enums", "./action/ToggleCreaturesDisableAttack", "./action/ToggleNPCsDisableAttack"], function (require, exports, IHuman_1, UiTranslation_1, Translation_1, Button_1, CheckButton_1, ContextMenu_1, RangeRow_1, Dropdown_1, InputManager_1, Tuple_1, Decorators_1, SetEquipment_1, SetSkills_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingTools_1, IBalancingTools_1, LabelledRow_1, IObject_1, Dictionary_1, Enums_1, ToggleCreaturesDisableAttack_1, ToggleNPCsDisableAttack_1) {
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
                    onActivate: () => this.setEquipment(equipment, this.dropdownItemQuality.selection),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRzs7Ozs7Ozs7OztJQTRCSCxTQUFTLFdBQVcsQ0FBQyxLQUFnQztRQUNwRCxPQUFPLHFCQUFXLENBQUMsR0FBRyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBSUQsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLG9CQUE0QztRQUNqRixNQUFNLHdCQUF5QixTQUFRLG9CQUFvQjtZQUkxRDtnQkFDQyxLQUFLLEVBQUUsQ0FBQztnQkFFUixJQUFJLHlCQUFXLEVBQUU7cUJBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDL0QsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7cUJBQzFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM5RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUkseUJBQVcsRUFBRTtxQkFDZixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUMxRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDckUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJ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