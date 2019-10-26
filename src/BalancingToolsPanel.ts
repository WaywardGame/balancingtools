import ActionExecutor from "entity/action/ActionExecutor";
import Translation from "language/Translation";
import { bindingManager } from "newui/BindingManager";
import Button from "newui/component/Button";
import { CheckButton } from "newui/component/CheckButton";
import ContextMenu from "newui/component/ContextMenu";
import newui from "newui/NewUi";
import { Tuple } from "utilities/Arrays";

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
			ActionExecutor.get(ToggleCreaturesFrozen).execute(localPlayer, freezed);
		}

		private toggleFreezeNPCs(freezed: boolean) {
			ActionExecutor.get(ToggleNPCsFrozen).execute(localPlayer, freezed);
		}

		@Bound
		private showDifficultyContextMenu() {
			const screen = newui.screens.getTop();
			if (!screen) {
				return;
			}

			const mouse = bindingManager.getMouse();

			new ContextMenu(...difficulties.keys()
				.map(difficulty => Tuple(Difficulty[difficulty], {
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
