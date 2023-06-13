/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */

import { SkillType } from "game/entity/IHuman";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import Button from "ui/component/Button";
import { CheckButton } from "ui/component/CheckButton";
import ContextMenu from "ui/component/ContextMenu";
import { RangeRow } from "ui/component/RangeRow";
import Dropdown from "ui/component/Dropdown";
import InputManager from "ui/input/InputManager";
import { Tuple } from "utilities/collection/Tuple";
import { Bound } from "utilities/Decorators";
import { DebugToolsPanel, DebugToolsDialogPanelClass } from "@wayward/debugtools";
import SetEquipment from "./action/SetEquipment";
import SetSkills from "./action/SetSkills";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import ToggleNPCsFrozen from "./action/ToggleNPCsFrozen";
import BalancingTools from "./BalancingTools";
import { BalancingToolsTranslation, EquipmentSet, equipmentSets } from "./IBalancingTools";
import { LabelledRow } from "ui/component/LabelledRow";
import { Quality } from "game/IObject";
import Dictionary from "language/Dictionary";
import Enums from "utilities/enum/Enums";
import ToggleCreaturesDisableAttack from "./action/ToggleCreaturesDisableAttack";
import ToggleNPCsDisableAttack from "./action/ToggleNPCsDisableAttack";

function translation(entry: BalancingToolsTranslation) {
	return Translation.get(BalancingTools.INSTANCE.dictionary, entry);
}

// tslint:disable variable-name

const BalancingToolsPanel = function (DebugToolsPanelClass: typeof DebugToolsPanel) {
	class BalancingToolsPanelClass extends DebugToolsPanelClass {

		private readonly dropdownItemQuality: Dropdown<Quality>;

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

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.DisableAttackCreatures))
				.setRefreshMethod(() => !!BalancingTools.INSTANCE.saveData.disableAttackCreatures)
				.event.subscribe("toggle", (_, checked) => this.toggleDisableAttackCreatures(checked))
				.appendTo(this);

			new CheckButton()
				.setText(translation(BalancingToolsTranslation.DisableAttackNPCs))
				.setRefreshMethod(() => !!BalancingTools.INSTANCE.saveData.disableAttackNPCs)
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

		public override getTranslation() {
			return translation(BalancingToolsTranslation.PanelName);
		}

		private toggleFreezeCreatures(freezed: boolean) {
			ToggleCreaturesFrozen.execute(localPlayer, freezed);
		}

		private toggleFreezeNPCs(freezed: boolean) {
			ToggleNPCsFrozen.execute(localPlayer, freezed);
		}

		private toggleDisableAttackCreatures(disable: boolean) {
			ToggleCreaturesDisableAttack.execute(localPlayer, disable);
		}

		private toggleDisableAttackNPCs(disable: boolean) {
			ToggleNPCsDisableAttack.execute(localPlayer, disable);
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
					translation: Translation.get(BalancingTools.INSTANCE.dictionaryEquipment, equipment),
					onActivate: () => this.setEquipment(equipment, this.dropdownItemQuality.selection),
				})))
				.addAllDescribedOptions()
				.setPosition(...mouse.xy)
				.schedule(screen.setContextMenu);
		}

		private setEquipment(equipment: EquipmentSet, selection: Quality) {
			SetEquipment.execute(localPlayer, equipment, selection);
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
