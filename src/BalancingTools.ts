import DebugTools, { ModRegistrationMainDialogPanel } from "@wayward/debugtools";
import { EventHandler } from "event/EventManager";
import { ActionType } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import { MoveType } from "game/entity/IEntity";
import NPC from "game/entity/npc/NPC";
import { ITile } from "game/tile/ITerrain";
import Dictionary from "language/Dictionary";
import { InterModRegistration } from "mod/InterModRegistry";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import Actions from "./action/IAction";
import SetEquipment from "./action/SetEquipment";
import SetSkills from "./action/SetSkills";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import ToggleNPCsFrozen from "./action/ToggleNPCsFrozen";
import BalancingToolsPanel from "./BalancingToolsPanel";
import { BalancingToolsTranslation, BALANCING_TOOLS_ID, EquipmentSet, ISaveData } from "./IBalancingTools";

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

	@Register.action("SetEquipment", SetEquipment)
	public readonly actionSetEquipment: ActionType;

	@Register.action("SetSkills", SetSkills)
	public readonly actionSetSkills: ActionType;

	@Register.action("SpawnCreatureLine", SpawnCreatureLine)
	public readonly actionSpawnCreatureLine: ActionType;

	////////////////////////////////////
	// Hooks
	//

	/**
	 * Disables creature movement
	 */
	@EventHandler(Creature, "canMove")
	public canCreatureMove(creature: Creature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeCreatures) {
			return false;
		}

		return undefined;
	}

	/**
	 * Disables NPC movement
	 */
	@EventHandler(NPC, "canMove")
	public canNPCMove(npc: NPC, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeNPCs) {
			return false;
		}

		return undefined;
	}

}
