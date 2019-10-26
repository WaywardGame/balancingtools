var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "entity/action/ActionExecutor", "language/Translation", "newui/BindingManager", "newui/component/Button", "newui/component/CheckButton", "newui/component/ContextMenu", "newui/NewUi", "utilities/Arrays", "./action/SetDifficulty", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./action/ToggleNPCsFrozen", "./BalancingTools", "./IBalancingTools"], function (require, exports, ActionExecutor_1, Translation_1, BindingManager_1, Button_1, CheckButton_1, ContextMenu_1, NewUi_1, Arrays_1, SetDifficulty_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, ToggleNPCsFrozen_1, BalancingTools_1, IBalancingTools_1) {
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
                ActionExecutor_1.default.get(ToggleCreaturesFrozen_1.default).execute(localPlayer, freezed);
            }
            toggleFreezeNPCs(freezed) {
                ActionExecutor_1.default.get(ToggleNPCsFrozen_1.default).execute(localPlayer, freezed);
            }
            showDifficultyContextMenu() {
                const screen = NewUi_1.default.screens.getTop();
                if (!screen) {
                    return;
                }
                const mouse = BindingManager_1.bindingManager.getMouse();
                new ContextMenu_1.default(...IBalancingTools_1.difficulties.keys()
                    .map(difficulty => Arrays_1.Tuple(IBalancingTools_1.Difficulty[difficulty], {
                    translation: new Translation_1.default(BalancingTools_1.default.INSTANCE.dictionaryDifficulty, difficulty),
                    onActivate: () => this.setDifficulty(difficulty)
                })))
                    .addAllDescribedOptions()
                    .setPosition(...mouse.xy)
                    .schedule(screen.setContextMenu);
            }
            setDifficulty(difficulty) {
                ActionExecutor_1.default.get(SetDifficulty_1.default).execute(localPlayer, difficulty);
            }
            spawnCreatureLine() {
                ActionExecutor_1.default.get(SpawnCreatureLine_1.default).execute(localPlayer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQW1CQSxTQUFTLFdBQVcsQ0FBQyxLQUFnQztRQUNwRCxPQUFPLElBQUkscUJBQVcsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUlELE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxvQkFBNEM7UUFDakYsTUFBTSx3QkFBeUIsU0FBUSxvQkFBb0I7WUFFMUQ7Z0JBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBRVIsSUFBSSx5QkFBVyxFQUFFO3FCQUNmLE9BQU8sQ0FBQyxXQUFXLENBQUMsMkNBQXlCLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQy9ELGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO3FCQUMxRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqQixJQUFJLHlCQUFXLEVBQUU7cUJBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDMUQsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7cUJBQ3JFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN6RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUksZ0JBQU0sRUFBRTtxQkFDVixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUM3RCxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUM7cUJBQzNELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakIsSUFBSSxnQkFBTSxFQUFFO3FCQUNWLE9BQU8sQ0FBQyxXQUFXLENBQUMsMkNBQXlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDakUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDO3FCQUNuRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUVnQixjQUFjO2dCQUM5QixPQUFPLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRU8scUJBQXFCLENBQUMsT0FBZ0I7Z0JBQzdDLHdCQUFjLENBQUMsR0FBRyxDQUFDLCtCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBRU8sZ0JBQWdCLENBQUMsT0FBZ0I7Z0JBQ3hDLHdCQUFjLENBQUMsR0FBRyxDQUFDLDBCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBR08seUJBQXlCO2dCQUNoQyxNQUFNLE1BQU0sR0FBRyxlQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNaLE9BQU87aUJBQ1A7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsK0JBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFeEMsSUFBSSxxQkFBVyxDQUFDLEdBQUcsOEJBQVksQ0FBQyxJQUFJLEVBQUU7cUJBQ3BDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGNBQUssQ0FBQyw0QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNoRCxXQUFXLEVBQUUsSUFBSSxxQkFBVyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztvQkFDdEYsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO2lCQUNoRCxDQUFDLENBQUMsQ0FBQztxQkFDSCxzQkFBc0IsRUFBRTtxQkFDeEIsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztxQkFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRU8sYUFBYSxDQUFDLFVBQXNCO2dCQUMzQyx3QkFBYyxDQUFDLEdBQUcsQ0FBQyx1QkFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBR08saUJBQWlCO2dCQUN4Qix3QkFBYyxDQUFDLEdBQUcsQ0FBQywyQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0Q7UUF2Q1U7WUFBVCxRQUFRO3NFQUVSO1FBV0Q7WUFEQyxLQUFLO2lGQWlCTDtRQU9EO1lBREMsS0FBSzt5RUFHTDtRQUdGLE9BQU8sd0JBQXNELENBQUM7SUFDL0QsQ0FBQyxDQUFDO0lBRUYsa0JBQWUsbUJBQW1CLENBQUMifQ==