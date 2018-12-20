var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "action/ActionExecutor", "language/Translation", "newui/BindingManager", "newui/component/Button", "newui/component/CheckButton", "newui/component/ContextMenu", "utilities/iterable/Generators", "utilities/Objects", "./action/SetDifficulty", "./action/SpawnCreatureLine", "./action/ToggleCreaturesFrozen", "./BalancingTools", "./IBalancingTools"], function (require, exports, ActionExecutor_1, Translation_1, BindingManager_1, Button_1, CheckButton_1, ContextMenu_1, Generators_1, Objects_1, SetDifficulty_1, SpawnCreatureLine_1, ToggleCreaturesFrozen_1, BalancingTools_1, IBalancingTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function translation(entry) {
        return new Translation_1.default(BalancingTools_1.default.INSTANCE.dictionary, entry);
    }
    const BalancingToolsPanel = function (DebugToolsPanelClass) {
        class BalancingToolsPanelClass extends DebugToolsPanelClass {
            constructor(gsapi) {
                super(gsapi);
                new CheckButton_1.CheckButton(this.api)
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.FreezeCreatures))
                    .setRefreshMethod(() => !!BalancingTools_1.default.INSTANCE.saveData.freezeCreatures)
                    .on(CheckButton_1.CheckButtonEvent.Change, (_, checked) => this.toggleFreezeCreatures(checked))
                    .appendTo(this);
                new Button_1.default(this.api)
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.SetDifficulty))
                    .on(Button_1.ButtonEvent.Activate, this.showDifficultyContextMenu)
                    .appendTo(this);
                new Button_1.default(this.api)
                    .setText(translation(IBalancingTools_1.BalancingToolsTranslation.SpawnCreatureLine))
                    .on(Button_1.ButtonEvent.Activate, this.spawnCreatureLine)
                    .appendTo(this);
            }
            getTranslation() {
                return translation(IBalancingTools_1.BalancingToolsTranslation.PanelName);
            }
            toggleFreezeCreatures(freezed) {
                ActionExecutor_1.default.get(ToggleCreaturesFrozen_1.default).execute(localPlayer, freezed);
            }
            showDifficultyContextMenu() {
                const screen = this.api.getVisibleScreen();
                if (!screen) {
                    return;
                }
                const mouse = BindingManager_1.bindingManager.getMouse();
                new ContextMenu_1.default(this.api, ...IBalancingTools_1.difficulties.keys()
                    .map(difficulty => Generators_1.tuple(IBalancingTools_1.Difficulty[difficulty], {
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
            Objects_1.Bound
        ], BalancingToolsPanelClass.prototype, "showDifficultyContextMenu", null);
        __decorate([
            Objects_1.Bound
        ], BalancingToolsPanelClass.prototype, "spawnCreatureLine", null);
        return BalancingToolsPanelClass;
    };
    exports.default = BalancingToolsPanel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQWlCQSxTQUFTLFdBQVcsQ0FBQyxLQUFnQztRQUNwRCxPQUFPLElBQUkscUJBQVcsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUlELE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxvQkFBNEM7UUFDakYsTUFBTSx3QkFBeUIsU0FBUSxvQkFBb0I7WUFFMUQsWUFBbUIsS0FBcUI7Z0JBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFYixJQUFJLHlCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztxQkFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDL0QsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7cUJBQzFFLEVBQUUsQ0FBQyw4QkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN6RixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUM3RCxFQUFFLENBQUMsb0JBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDO3FCQUN4RCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpCLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLGlCQUFpQixDQUFDLENBQUM7cUJBQ2pFLEVBQUUsQ0FBQyxvQkFBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUM7cUJBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBRU0sY0FBYztnQkFDcEIsT0FBTyxXQUFXLENBQUMsMkNBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUVPLHFCQUFxQixDQUFDLE9BQWdCO2dCQUM3Qyx3QkFBYyxDQUFDLEdBQUcsQ0FBQywrQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekUsQ0FBQztZQUdPLHlCQUF5QjtnQkFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNaLE9BQU87aUJBQ1A7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsK0JBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFeEMsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyw4QkFBWSxDQUFDLElBQUksRUFBRTtxQkFDOUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsa0JBQUssQ0FBQyw0QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNoRCxXQUFXLEVBQUUsSUFBSSxxQkFBVyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztvQkFDdEYsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO2lCQUNoRCxDQUFDLENBQUMsQ0FBQztxQkFDSCxzQkFBc0IsRUFBRTtxQkFDeEIsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztxQkFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRU8sYUFBYSxDQUFDLFVBQXNCO2dCQUMzQyx3QkFBYyxDQUFDLEdBQUcsQ0FBQyx1QkFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBR08saUJBQWlCO2dCQUN4Qix3QkFBYyxDQUFDLEdBQUcsQ0FBQywyQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0Q7UUExQkE7WUFEQyxlQUFLO2lGQWlCTDtRQU9EO1lBREMsZUFBSzt5RUFHTDtRQUdGLE9BQU8sd0JBQXNELENBQUM7SUFDL0QsQ0FBQyxDQUFDO0lBRUYsa0JBQWUsbUJBQW1CLENBQUMifQ==