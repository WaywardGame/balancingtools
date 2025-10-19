import type { DebugToolsDialogPanelClass, DebugToolsPanel } from "@wayward/debugtools";
import { Quality } from "@wayward/game/game/IObject";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import Dictionary from "@wayward/game/language/Dictionary";
import Translation from "@wayward/game/language/Translation";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Button from "@wayward/game/ui/component/Button";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import ContextMenu from "@wayward/game/ui/component/ContextMenu";
import Dropdown from "@wayward/game/ui/component/Dropdown";
import { LabelledRow } from "@wayward/game/ui/component/LabelledRow";
import { RangeRow } from "@wayward/game/ui/component/RangeRow";
import InputManager from "@wayward/game/ui/input/InputManager";
import Enums from "@wayward/game/utilities/enum/Enums";
import { Bound } from "@wayward/utilities/Decorators";
import { Tuple } from "@wayward/utilities/collection/Tuple";
// import BalancingTools from "./BalancingTools";
import { GetBalancingToolsInstance, BalancingToolsTranslation, EquipmentSet, equipmentSets } from "./IBalancingTools";
import SetEquipment from "./action/SetEquipment";
import SetSkills from "./action/SetSkills";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesDisableAttack from "./action/ToggleCreaturesDisableAttack";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import ToggleNPCsDisableAttack from "./action/ToggleNPCsDisableAttack";
import ToggleNPCsFrozen from "./action/ToggleNPCsFrozen";

function translation(entry: BalancingToolsTranslation): TranslationImpl {
	return Translation.get(GetBalancingToolsInstance()?.dictionary, entry);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const BalancingToolsPanel = function (DebugToolsPanelClass: typeof DebugToolsPanel) {
	class BalancingToolsPanelClass extends DebugToolsPanelClass {

		private readonly dropdownItemQuality: Dropdown<Quality>;

		public constructor() {
			super();

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.FreezeCreatures))
				.setRefreshMethod(() => !!GetBalancingToolsInstance()?.saveData.freezeCreatures)
				.event.subscribe("toggle", (_, checked) => this.toggleFreezeCreatures(checked))
				.appendTo(this);

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.FreezeNPCs))
				.setRefreshMethod(() => !!GetBalancingToolsInstance()?.saveData.freezeNPCs)
				.event.subscribe("toggle", (_, checked) => this.toggleFreezeNPCs(checked))
				.appendTo(this);

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.DisableAttackCreatures))
				.setRefreshMethod(() => !!GetBalancingToolsInstance()?.saveData.disableAttackCreatures)
				.event.subscribe("toggle", (_, checked) => this.toggleDisableAttackCreatures(checked))
				.appendTo(this);

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.DisableAttackNPCs))
				.setRefreshMethod(() => !!GetBalancingToolsInstance()?.saveData.disableAttackNPCs)
				.event.subscribe("toggle", (_, checked) => this.toggleDisableAttackNPCs(checked))
				.appendTo(this);

			new Button()
				.setText(translation(BalancingToolsTranslation.SetEquipment))
				.event.subscribe("activate", this.showEquipmentContextMenu)
				.appendTo(this);

			new LabelledRow()
				.classes.add("dropdown-label")
				.setLabel(label => label.setText(translation(BalancingToolsTranslation.EquipmentQuality)))
				.append(this.dropdownItemQuality = new Dropdown<Quality>()
					.setRefreshMethod(() => ({
						defaultOption: Quality.Random,
						options: Enums.values(Quality)
							.map(quality => Tuple(quality, Translation.get(Dictionary.Quality, quality)))
							.map(([id, t]) => Tuple(id, (option: Button) => option.setText(t))),
					})))
				.appendTo(this);

			new RangeRow()
				.setLabel(label => label.setText(translation(BalancingToolsTranslation.SetSkills)))
				.editRange(range => range
					.setMin(0)
					.setMax(100)
					.setRefreshMethod(() => localPlayer?.skill.getCore(SkillType.Tactics) ?? 0)) // Just use Tactics, but we are actually increasing a bunch of things in SetSkills.ts
				.setDisplayValue(Translation.ui(UiTranslation.MenuSharedValuePercentage).get)
				.event.subscribe("finish", this.setSkills)
				.appendTo(this);

			new Button()
				.setText(translation(BalancingToolsTranslation.SpawnCreatureLine))
				.event.subscribe("activate", this.spawnCreatureLine)
				.appendTo(this);
		}

		public override getTranslation(): TranslationImpl {
			return translation(BalancingToolsTranslation.PanelName);
		}

		private toggleFreezeCreatures(freezed: boolean): void {
			void ToggleCreaturesFrozen.execute(localPlayer, freezed);
		}

		private toggleFreezeNPCs(freezed: boolean): void {
			void ToggleNPCsFrozen.execute(localPlayer, freezed);
		}

		private toggleDisableAttackCreatures(disable: boolean): void {
			void ToggleCreaturesDisableAttack.execute(localPlayer, disable);
		}

		private toggleDisableAttackNPCs(disable: boolean): void {
			void ToggleNPCsDisableAttack.execute(localPlayer, disable);
		}

		@Bound
		private showEquipmentContextMenu(): void {
			const screen = ui.screens.getTop();
			if (!screen) {
				return;
			}

			const mouse = InputManager.mouse.position;

			new ContextMenu(...equipmentSets.keys()
				.map(equipment => Tuple(EquipmentSet[equipment], {
					translation: Translation.get(GetBalancingToolsInstance()?.dictionaryEquipment, equipment),
					onActivate: () => this.setEquipment(equipment, this.dropdownItemQuality.selectedOption),
				})))
				.addAllDescribedOptions()
				.setPosition(...mouse.xy)
				.schedule(screen.setContextMenu);
		}

		private setEquipment(equipment: EquipmentSet, selection: Quality): void {
			void SetEquipment.execute(localPlayer, equipment, selection);
		}

		@Bound
		private setSkills(_: any, value: number): void {
			void SetSkills.execute(localPlayer, value);
		}

		@Bound
		private spawnCreatureLine(): void {
			void SpawnCreatureLine.execute(localPlayer);
		}
	}

	return BalancingToolsPanelClass as DebugToolsDialogPanelClass;
};

export default BalancingToolsPanel;
