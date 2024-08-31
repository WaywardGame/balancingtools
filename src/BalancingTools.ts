import DebugTools, { ModRegistrationMainDialogPanel } from "@wayward/debugtools";
import { EventHandler } from "@wayward/game/event/EventManager";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import Creature from "@wayward/game/game/entity/creature/Creature";
import { MoveType } from "@wayward/game/game/entity/IEntity";
import NPC from "@wayward/game/game/entity/npc/NPC";
import Tile from "@wayward/game/game/tile/Tile";
import Dictionary from "@wayward/game/language/Dictionary";
import { InterModRegistration } from "@wayward/game/mod/InterModRegistry";
import Mod from "@wayward/game/mod/Mod";
import Register from "@wayward/game/mod/ModRegistry";
import Actions from "./action/IAction";
import SetEquipment from "./action/SetEquipment";
import SetSkills from "./action/SetSkills";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import ToggleCreaturesDisableAttack from "./action/ToggleCreaturesDisableAttack";
import ToggleNPCsFrozen from "./action/ToggleNPCsFrozen";
import ToggleNPCsDisableAttack from "./action/ToggleNPCsDisableAttack";
import BalancingToolsPanel from "./BalancingToolsPanel";
import { BalancingToolsTranslation, BALANCING_TOOLS_ID, EquipmentSet, ISaveData } from "./IBalancingTools";
import Human from "@wayward/game/game/entity/Human";

export default class BalancingTools extends Mod {

	@Mod.instance(BALANCING_TOOLS_ID)
	public static readonly INSTANCE: BalancingTools;

	@Mod.instance<DebugTools>("Debug Tools")
	public readonly DEBUG_TOOLS: DebugTools;

	@Register.interModRegistration<ModRegistrationMainDialogPanel>("Debug Tools", "MainDialogPanel", BalancingToolsPanel)
	public readonly balancingToolsPanel: InterModRegistration<ModRegistrationMainDialogPanel>;

	@Register.dictionary("BalancingTools", BalancingToolsTranslation)
	public readonly dictionary: Dictionary;
	@Register.dictionary("Equipment", EquipmentSet)
	public readonly dictionaryEquipment: Dictionary;

	@Mod.saveData(BALANCING_TOOLS_ID)
	public readonly saveData: ISaveData;

	@Register.registry(Actions)
	public actions: Actions;

	////////////////////////////////////
	// Actions
	//

	@Register.action("ToggleCreaturesFrozen", ToggleCreaturesFrozen)
	public readonly actionToggleCreaturesFrozen: ActionType;

	@Register.action("ToggleNPCsFrozen", ToggleNPCsFrozen)
	public readonly actionToggleNPCsFrozen: ActionType;

	@Register.action("ToggleCreaturesDisableAttack", ToggleCreaturesDisableAttack)
	public readonly actionToggleCreaturesDisableAttack: ActionType;

	@Register.action("ToggleNPCsDisableAttack", ToggleNPCsDisableAttack)
	public readonly actionToggleNPCsDisableAttack: ActionType;

	@Register.action("SetEquipment", SetEquipment)
	public readonly actionSetEquipment: ActionType;

	@Register.action("SetSkills", SetSkills)
	public readonly actionSetSkills: ActionType;

	@Register.action("SpawnCreatureLine", SpawnCreatureLine)
	public readonly actionSpawnCreatureLine: ActionType;

	////////////////////////////////////
	// Event Handlers
	//

	/**
	 * Disables creature movement
	 */
	@EventHandler(Creature, "canMove")
	public canCreatureMove(creature: Creature, tile: Tile, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeCreatures) {
			return false;
		}

		return undefined;
	}

	@EventHandler(Creature, "canAttack")
	public canAttack(enemy: Human | Creature): boolean | undefined {
		if (this.saveData.disableAttackCreatures) {
			return false;
		}

		return undefined;
	}

	/**
	 * Disables NPC movement and creature attacks
	 */
	@EventHandler(NPC, "canNPCMove")
	public canNPCMove(npc: NPC, tile: Tile, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeNPCs) {
			return false;
		}

		return undefined;
	}

	@EventHandler(NPC, "canNPCAttack")
	public canNPCAttack(): boolean | undefined {
		if (this.saveData.disableAttackNPCs) {
			return false;
		}

		return undefined;
	}

}
