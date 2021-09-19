var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/Translation", "ui/component/Button", "ui/component/RangeRow", "ui/component/CheckButton", "ui/component/ContextMenu", "ui/input/InputManager", "utilities/collection/Arrays", "./action/SetEquipment", "./action/SpawnCreatureLine", "./action/SetSkills", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingTools", "./IBalancingTools", "language/dictionary/UiTranslation", "game/entity/IHuman"], function (require, exports, Translation_1, Button_1, RangeRow_1, CheckButton_1, ContextMenu_1, InputManager_1, Arrays_1, SetEquipment_1, SpawnCreatureLine_1, SetSkills_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingTools_1, IBalancingTools_1, UiTranslation_1, IHuman_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function translation(entry) {
        return new Translation_1.default(BalancingTools_1.default.INSTANCE.dictionary, entry);
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
                    .map(equipment => Arrays_1.Tuple(IBalancingTools_1.EquipmentSet[equipment], {
                    translation: new Translation_1.default(BalancingTools_1.default.INSTANCE.dictionaryEquipment, equipment),
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
            Override
        ], BalancingToolsPanelClass.prototype, "getTranslation", null);
        __decorate([
            Bound
        ], BalancingToolsPanelClass.prototype, "showEquipmentContextMenu", null);
        __decorate([
            Bound
        ], BalancingToolsPanelClass.prototype, "setSkills", null);
        __decorate([
            Bound
        ], BalancingToolsPanelClass.prototype, "spawnCreatureLine", null);
        return BalancingToolsPanelClass;
    };
    exports.default = BalancingToolsPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQW1CQSxTQUFTLFdBQVcsQ0FBQyxLQUFnQztRQUNwRCxPQUFPLElBQUkscUJBQVcsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUlELE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxvQkFBNEM7UUFDakYsTUFBTSx3QkFBeUIsU0FBUSxvQkFBb0I7WUFFMUQ7Z0JBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBRVIsSUFBSSx5QkFBVyxFQUFFO3FCQUNmLE9BQU8sQ0FBQyxXQUFXLENBQUMsMkNBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQy9ELGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO3FCQUMxRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqQixJQUFJLHlCQUFXLEVBQUU7cUJBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDMUQsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3JFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8s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