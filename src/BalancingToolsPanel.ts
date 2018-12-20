import ActionExecutor from "action/ActionExecutor";
import Translation from "language/Translation";
import { bindingManager } from "newui/BindingManager";
import Button, { ButtonEvent } from "newui/component/Button";
import { CheckButton, CheckButtonEvent } from "newui/component/CheckButton";
import ContextMenu from "newui/component/ContextMenu";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import { tuple } from "utilities/iterable/Generators";
import { Bound } from "utilities/Objects";
import DebugToolsPanel from "../../debugtools/out/ui/component/DebugToolsPanel";
import { DebugToolsDialogPanelClass } from "../../debugtools/out/ui/DebugToolsDialog";
import SetDifficulty from "./action/SetDifficulty";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import BalancingTools from "./BalancingTools";
import { BalancingToolsTranslation, difficulties, Difficulty } from "./IBalancingTools";

function translation(entry: BalancingToolsTranslation) {
	return new Translation(BalancingTools.INSTANCE.dictionary, entry);
}

// tslint:disable variable-name

const BalancingToolsPanel = function (DebugToolsPanelClass: typeof DebugToolsPanel) {
	class BalancingToolsPanelClass extends DebugToolsPanelClass {

		public constructor(gsapi: IGameScreenApi) {
			super(gsapi);

			new CheckButton(this.api)
				.setText(translation(BalancingToolsTranslation.FreezeCreatures))
				.setRefreshMethod(() => !!BalancingTools.INSTANCE.saveData.freezeCreatures)
				.on(CheckButtonEvent.Change, (_, checked: boolean) => this.toggleFreezeCreatures(checked))
				.appendTo(this);

			new Button(this.api)
				.setText(translation(BalancingToolsTranslation.SetDifficulty))
				.on(ButtonEvent.Activate, this.showDifficultyContextMenu)
				.appendTo(this);

			new Button(this.api)
				.setText(translation(BalancingToolsTranslation.SpawnCreatureLine))
				.on(ButtonEvent.Activate, this.spawnCreatureLine)
				.appendTo(this);
		}

		public getTranslation() {
			return translation(BalancingToolsTranslation.PanelName);
		}

		private toggleFreezeCreatures(freezed: boolean) {
			ActionExecutor.get(ToggleCreaturesFrozen).execute(localPlayer, freezed);
		}

		@Bound
		private showDifficultyContextMenu() {
			const screen = this.api.getVisibleScreen();
			if (!screen) {
				return;
			}

			const mouse = bindingManager.getMouse();

			new ContextMenu(this.api, ...difficulties.keys()
				.map(difficulty => tuple(Difficulty[difficulty], {
					translation: new Translation(BalancingTools.INSTANCE.dictionaryDifficulty, difficulty),
					onActivate: () => this.setDifficulty(difficulty)
				})))
				.addAllDescribedOptions()
				.setPosition(...mouse.xy)
				.schedule(screen.setContextMenu);
		}

		private setDifficulty(difficulty: Difficulty) {
			ActionExecutor.get(SetDifficulty).execute(localPlayer, difficulty);
		}

		@Bound
		private spawnCreatureLine() {
			ActionExecutor.get(SpawnCreatureLine).execute(localPlayer);
		}
	}

	return BalancingToolsPanelClass as DebugToolsDialogPanelClass;
};

export default BalancingToolsPanel;
