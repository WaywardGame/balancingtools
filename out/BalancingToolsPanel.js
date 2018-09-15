var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/Translation", "mod/ModRegistry", "newui/BindingManager", "newui/component/Button", "newui/component/CheckButton", "newui/component/ContextMenu", "utilities/Arrays", "utilities/Objects", "./BalancingTools", "./IBalancingTools"], function (require, exports, Translation_1, ModRegistry_1, BindingManager_1, Button_1, CheckButton_1, ContextMenu_1, Arrays_1, Objects_1, BalancingTools_1, IBalancingTools_1) {
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
                actionManager.execute(localPlayer, ModRegistry_1.Registry.id(BalancingTools_1.default.INSTANCE.toggleCreaturesFrozen), { object: freezed });
            }
            showDifficultyContextMenu() {
                const screen = this.api.getVisibleScreen();
                if (!screen) {
                    return;
                }
                const mouse = BindingManager_1.bindingManager.getMouse();
                new ContextMenu_1.default(this.api, ...IBalancingTools_1.difficulties.keys()
                    .map(difficulty => Arrays_1.tuple(IBalancingTools_1.Difficulty[difficulty], {
                    translation: new Translation_1.default(BalancingTools_1.default.INSTANCE.dictionaryDifficulty, difficulty),
                    onActivate: () => this.setDifficulty(difficulty)
                })))
                    .addAllDescribedOptions()
                    .setPosition(...mouse.xy)
                    .schedule(screen.setContextMenu);
            }
            setDifficulty(difficulty) {
                actionManager.execute(localPlayer, ModRegistry_1.Registry.id(BalancingTools_1.default.INSTANCE.setDifficulty), { object: difficulty });
            }
            spawnCreatureLine() {
                actionManager.execute(localPlayer, ModRegistry_1.Registry.id(BalancingTools_1.default.INSTANCE.spawnCreatureLine));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHNQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWxhbmNpbmdUb29sc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQWVBLFNBQVMsV0FBVyxDQUFDLEtBQWdDO1FBQ3BELE9BQU8sSUFBSSxxQkFBVyxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBSUQsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLG9CQUE0QztRQUNqRixNQUFNLHdCQUF5QixTQUFRLG9CQUFvQjtZQUUxRCxZQUFtQixLQUFxQjtnQkFDdkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUViLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLDJDQUF5QixDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUMvRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztxQkFDMUUsRUFBRSxDQUFDLDhCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakIsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsMkNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzdELEVBQUUsQ0FBQyxvQkFBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUM7cUJBQ3hELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakIsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQUMsMkNBQXlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDakUsRUFBRSxDQUFDLG9CQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztxQkFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFFTSxjQUFjO2dCQUNwQixPQUFPLFdBQVcsQ0FBQywyQ0FBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRU8scUJBQXFCLENBQUMsT0FBZ0I7Z0JBQzdDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHNCQUFRLENBQUMsRUFBRSxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLHFCQUF1QyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN2SSxDQUFDO1lBR08seUJBQXlCO2dCQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1osT0FBTztpQkFDUDtnQkFFRCxNQUFNLEtBQUssR0FBRywrQkFBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUV4QyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLDhCQUFZLENBQUMsSUFBSSxFQUFFO3FCQUM5QyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFLLENBQUMsNEJBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDaEQsV0FBVyxFQUFFLElBQUkscUJBQVcsQ0FBQyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUM7b0JBQ3RGLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztpQkFDaEQsQ0FBQyxDQUFDLENBQUM7cUJBQ0gsc0JBQXNCLEVBQUU7cUJBQ3hCLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7cUJBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUVPLGFBQWEsQ0FBQyxVQUFzQjtnQkFDM0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsc0JBQVEsQ0FBQyxFQUFFLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsYUFBK0IsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDbEksQ0FBQztZQUdPLGlCQUFpQjtnQkFDeEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsc0JBQVEsQ0FBQyxFQUFFLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsaUJBQW1DLENBQUMsQ0FBQyxDQUFDO1lBQzlHLENBQUM7U0FDRDtRQTFCQTtZQURDLGVBQUs7aUZBaUJMO1FBT0Q7WUFEQyxlQUFLO3lFQUdMO1FBR0YsT0FBTyx3QkFBc0QsQ0FBQztJQUMvRCxDQUFDLENBQUM7SUFFRixrQkFBZSxtQkFBbUIsQ0FBQyJ9