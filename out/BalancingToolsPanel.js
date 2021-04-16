var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/Translation", "ui/component/Button", "ui/component/CheckButton", "ui/component/ContextMenu", "ui/input/InputManager", "utilities/collection/Arrays", "./action/SetDifficulty", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingTools", "./IBalancingTools"], function (require, exports, Translation_1, Button_1, CheckButton_1, ContextMenu_1, InputManager_1, Arrays_1, SetDifficulty_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingTools_1, IBalancingTools_1) {
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
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.SetDifficulty))
                    .event.subscribe("activate", this.showDifficultyContextMenu)
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
            showDifficultyContextMenu() {
                const screen = ui.screens.getTop();
                if (!screen) {
                    return;
                }
                const mouse = InputManager_1.default.mouse.position;
                new ContextMenu_1.default(...IBalancingTools_1.difficulties.keys()
                    .map(difficulty => Arrays_1.Tuple(IBalancingTools_1.Difficulty[difficulty], {
                    translation: new Translation_1.default(BalancingTools_1.default.INSTANCE.dictionaryDifficulty, difficulty),
                    onActivate: () => this.setDifficulty(difficulty),
                })))
                    .addAllDescribedOptions()
                    .setPosition(...mouse.xy)
                    .schedule(screen.setContextMenu);
            }
            setDifficulty(difficulty) {
                SetDifficulty_1.default.execute(localPlayer, difficulty);
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
        ], BalancingToolsPanelClass.prototype, "showDifficultyContextMenu", null);
        __decorate([
            Bound
        ], BalancingToolsPanelClass.prototype, "spawnCreatureLine", null);
        return BalancingToolsPanelClass;
    };
    exports.default = BalancingToolsPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQWVBLFNBQVMsV0FBVyxDQUFDLEtBQWdDO1FBQ3BELE9BQU8sSUFBSSxxQkFBVyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBSUQsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLG9CQUE0QztRQUNqRixNQUFNLHdCQUF5QixTQUFRLG9CQUFvQjtZQUUxRDtnQkFDQyxLQUFLLEVBQUUsQ0FBQztnQkFFUixJQUFJLHlCQUFXLEVBQUU7cUJBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDL0QsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7cUJBQzFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM5RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUkseUJBQVcsRUFBRTtxQkFDZixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUMxRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztxQkFDckUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3pFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakIsSUFBSSxnQkFBTSxFQUFFO3FCQUNWLE9BQU8sQ0FBQyxXQUFXLENBQUMsMkNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzdELEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztxQkFDM0QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqQixJQUFJLGdCQUFNLEVBQUU7cUJBQ1YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUNqRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUM7cUJBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBRWdCLGNBQWM7Z0JBQzlCLE9BQU8sV0FBVyxDQUFDLDJDQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFFTyxxQkFBcUIsQ0FBQyxPQUFnQjtnQkFDN0MsK0JBQXFCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRU8sZ0JBQWdCLENBQUMsT0FBZ0I7Z0JBQ3hDLDBCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUdPLHlCQUF5QjtnQkFDaEMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWixPQUFPO2lCQUNQO2dCQUVELE1BQU0sS0FBSyxHQUFHLHNCQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFFMUMsSUFBSSxxQkFBVyxDQUFDLEdBQUcsOEJBQVksQ0FBQyxJQUFJLEVBQUU7cUJBQ3BDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGNBQUssQ0FBQyw0QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNoRCxXQUFXLEVBQUUsSUFBSSxxQkFBVyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztvQkFDdEYsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO2lCQUNoRCxDQUFDLENBQUMsQ0FBQztxQkFDSCxzQkFBc0IsRUFBRTtxQkFDeEIsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztxQkFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRU8sYUFBYSxDQUFDLFVBQXNCO2dCQUMzQyx1QkFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUdPLGlCQUFpQjtnQkFDeEIsMkJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FDRDtRQXZDVTtZQUFULFFBQVE7c0VBRVI7UUFXRDtZQURDLEtBQUs7aUZBaUJMO1FBT0Q7WUFEQyxLQUFLO3lFQUdMO1FBR0YsT0FBTyx3QkFBc0QsQ0FBQztJQUMvRCxDQUFDLENBQUM7SUFFRixrQkFBZSxtQkFBbUIsQ0FBQyJ9