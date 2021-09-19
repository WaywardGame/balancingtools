import Translation from "language/Translation";
import Button from "ui/component/Button";
import { RangeRow } from "ui/component/RangeRow";
import { CheckButton } from "ui/component/CheckButton";
import ContextMenu from "ui/component/ContextMenu";
import InputManager from "ui/input/InputManager";
import { Tuple } from "utilities/collection/Arrays";
import DebugToolsPanel from "../../debugtools/out/ui/component/DebugToolsPanel";
import { DebugToolsDialogPanelClass } from "../../debugtools/out/ui/DebugToolsDialog";
import SetEquipment from "./action/SetEquipment";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import SetSkills from "./action/SetSkills";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import ToggleNPCsFrozen from "./action/ToggleNPCsFrozen";
import BalancingTools from "./BalancingTools";
import { BalancingToolsTranslation, equipmentSets, EquipmentSet } from "./IBalancingTools";
import UiTranslation from "language/dictionary/UiTranslation";
import { SkillType } from "game/entity/IHuman";

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
				.setText(translation(BalancingToolsTranslation.SetEquipment))
				.event.subscribe("activate", this.showEquipmentContextMenu)
				.appendTo(this);

			new RangeRow()
				.setLabel(label => label.setText(translation(BalancingToolsTranslation.SetSkills)))
				.editRange(range => range
					.setMin(0)
					.setMax(100)
					.setRefreshMethod(() => localPlayer?.skill.getCore(SkillType.Tactics) ?? 0)) // Just use Tactics, but we are actually increasing a bunch of things in SetSkills.ts
				.setDisplayValue(Translation.ui(UiTranslation.GameStatsPercentage).get)
				.event.subscribe("finish", this.setSkills)
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
		private showEquipmentContextMenu() {
			const screen = ui.screens.getTop();
			if (!screen) {
				return;
			}

			const mouse = InputManager.mouse.position;

			new ContextMenu(...equipmentSets.keys()
				.map(equipment => Tuple(EquipmentSet[equipment], {
					translation: new Translation(BalancingTools.INSTANCE.dictionaryEquipment, equipment),
					onActivate: () => this.setEquipment(equipment),
				})))
				.addAllDescribedOptions()
				.setPosition(...mouse.xy)
				.schedule(screen.setContextMenu);
		}

		private setEquipment(equipment: EquipmentSet) {
			SetEquipment.execute(localPlayer, equipment);
		}

		@Bound
		private setSkills(_: any, value: number) {
			SetSkills.execute(localPlayer, value);
		}

		@Bound
		private spawnCreatureLine() {
			SpawnCreatureLine.execute(localPlayer);
		}
	}

	return BalancingToolsPanelClass as DebugToolsDialogPanelClass;
};

export default BalancingToolsPanel;
