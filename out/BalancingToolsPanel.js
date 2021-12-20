var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "game/entity/IHuman", "language/dictionary/UiTranslation", "language/Translation", "ui/component/Button", "ui/component/CheckButton", "ui/component/ContextMenu", "ui/component/RangeRow", "ui/input/InputManager", "utilities/collection/Arrays", "utilities/Decorators", "./action/SetEquipment", "./action/SetSkills", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingTools", "./IBalancingTools"], function (require, exports, IHuman_1, UiTranslation_1, Translation_1, Button_1, CheckButton_1, ContextMenu_1, RangeRow_1, InputManager_1, Arrays_1, Decorators_1, SetEquipment_1, SetSkills_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingTools_1, IBalancingTools_1) {
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
                new Button_1.default()
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.SetEquipment))
                    .event.subscribe("activate", this.showEquipmentContextMenu)
                    .appendTo(this);
                new RangeRow_1.RangeRow()
                    .setLabel(label => label.setText(translation(IBalancingTools_1.BalancingToolsTranslation.SetSkills)))
                    .editRange(range => range
                    .setMin(0)
                    .setMax(100)
                    .setRefreshMethod(() => { var _a; return (_a = localPlayer === null || localPlayer === void 0 ? void 0 : localPlayer.skill.getCore(IHuman_1.SkillType.Tactics)) !== null && _a !== void 0 ? _a : 0; }))
                    .setDisplayValue(Translation_1.default.ui(UiTranslation_1.default.GameStatsPercentage).get)
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
            showEquipmentContextMenu() {
                const screen = ui.screens.getTop();
                if (!screen) {
                    return;
                }
                const mouse = InputManager_1.default.mouse.position;
                new ContextMenu_1.default(...IBalancingTools_1.equipmentSets.keys()
                    .map(equipment => (0, Arrays_1.Tuple)(IBalancingTools_1.EquipmentSet[equipment], {
                    translation: Translation_1.default.get(BalancingTools_1.default.INSTANCE.dictionaryEquipment, equipment),
                    onActivate: () => this.setEquipment(equipment),
                })))
                    .addAllDescribedOptions()
                    .setPosition(...mouse.xy)
                    .schedule(screen.setContextMenu);
            }
            setEquipment(equipment) {
                SetEquipment_1.default.execute(localPlayer, equipment);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQW1CQSxTQUFTLFdBQVcsQ0FBQyxLQUFnQztRQUNwRCxPQUFPLHFCQUFXLENBQUMsR0FBRyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBSUQsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLG9CQUE0QztRQUNqRixNQUFNLHdCQUF5QixTQUFRLG9CQUFvQjtZQUUxRDtnQkFDQyxLQUFLLEVBQUUsQ0FBQztnQkFFUixJQUFJLHlCQUFXLEVBQUU7cUJBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDL0QsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7cUJBQzFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM5RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUkseUJBQVcsRUFBRTtxQkFDZixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUMxRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDckUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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