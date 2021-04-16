import Translation from "language/Translation";
import Button from "ui/component/Button";
import { CheckButton } from "ui/component/CheckButton";
import ContextMenu from "ui/component/ContextMenu";
import InputManager from "ui/input/InputManager";
import { Tuple } from "utilities/collection/Arrays";
import DebugToolsPanel from "../../debugtools/out/ui/component/DebugToolsPanel";
import { DebugToolsDialogPanelClass } from "../../debugtools/out/ui/DebugToolsDialog";
import SetDifficulty from "./action/SetDifficulty";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import ToggleNPCsFrozen from "./action/ToggleNPCsFrozen";
import BalancingTools from "./BalancingTools";
import { BalancingToolsTranslation, difficulties, Difficulty } from "./IBalancingTools";

function translation(entry: BalancingToolsTranslation) {
	return new Translation(BalancingTools.INSTANCE.dictionary, entry);
}

// tslint:disable variable-name

const BalancingToolsPanel = function (DebugToolsPanelClass: typeof DebugToolsPanel) {
	class BalancingToolsPanelClass extends DebugToolsPanelClass {

		public constructor() {
			super();

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.FreezeCreatures))
				.setRefreshMethod(() => !!BalancingTools.INSTANCE.saveData.freezeCreatures)
				.event.subscribe("toggle", (_, checked) => this.toggleFreezeCreatures(checked))
				.appendTo(this);

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.FreezeNPCs))
				.setRefreshMethod(() => !!BalancingTools.INSTANCE.saveData.freezeNPCs)
				.event.subscribe("toggle", (_, checked) => this.toggleFreezeNPCs(checked))
				.appendTo(this);

			new Button()
				.setText(translation(BalancingToolsTranslation.SetDifficulty))
				.event.subscribe("activate", this.showDifficultyContextMenu)
				.appendTo(this);

			new Button()
				.setText(translation(BalancingToolsTranslation.SpawnCreatureLine))
				.event.subscribe("activate", this.spawnCreatureLine)
				.appendTo(this);
		}

		@Override public getTranslation() {
			return translation(BalancingToolsTranslation.PanelName);
		}

		private toggleFreezeCreatures(freezed: boolean) {
			ToggleCreaturesFrozen.execute(localPlayer, freezed);
		}

		private toggleFreezeNPCs(freezed: boolean) {
			ToggleNPCsFrozen.execute(localPlayer, freezed);
		}

		@Bound
		private showDifficultyContextMenu() {
			const screen = ui.screens.getTop();
			if (!screen) {
				return;
			}

			const mouse = InputManager.mouse.position;

			new ContextMenu(...difficulties.keys()
				.map(difficulty => Tuple(Difficulty[difficulty], {
					translation: new Translation(BalancingTools.INSTANCE.dictionaryDifficulty, difficulty),
					onActivate: () => this.setDifficulty(difficulty),
				})))
				.addAllDescribedOptions()
				.setPosition(...mouse.xy)
				.schedule(screen.setContextMenu);
		}

		private setDifficulty(difficulty: Difficulty) {
			SetDifficulty.execute(localPlayer, difficulty);
		}

		@Bound
		private spawnCreatureLine() {
			SpawnCreatureLine.execute(localPlayer);
		}
	}

	return BalancingToolsPanelClass as DebugToolsDialogPanelClass;
};

export default BalancingToolsPanel;
