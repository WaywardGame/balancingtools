import { ActionType } from "action/IAction";
import { ICreature } from "creature/ICreature";
import { MoveType } from "Enums";
import { Dictionary } from "language/Dictionaries";
import { HookMethod } from "mod/IHookHost";
import { InterModRegistration } from "mod/InterModRegistry";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import { ITile } from "tile/ITerrain";
import DebugTools from "../../debugtools/out/DebugTools";
import { ModRegistrationMainDialogPanel } from "../../debugtools/out/IDebugTools";
import Actions from "./action/IAction";
import SetDifficulty from "./action/SetDifficulty";
import SpawnCreatureLine from "./action/SpawnCreatureLine";
import ToggleCreaturesFrozen from "./action/ToggleCreaturesFrozen";
import BalancingToolsPanel from "./BalancingToolsPanel";
import { BALANCING_TOOLS_ID, BalancingToolsTranslation, Difficulty, ISaveData } from "./IBalancingTools";

export default class BalancingTools extends Mod {

	@Mod.instance(BALANCING_TOOLS_ID)
	public static readonly INSTANCE: BalancingTools;

	@Mod.instance<DebugTools>("Debug Tools")
	public readonly DEBUG_TOOLS: DebugTools;

	@Register.interModRegistration<ModRegistrationMainDialogPanel>("Debug Tools", "MainDialogPanel", BalancingToolsPanel)
	public readonly balancingToolsPanel: InterModRegistration<ModRegistrationMainDialogPanel>;

	@Register.dictionary("BalancingTools", BalancingToolsTranslation)
	public readonly dictionary: Dictionary;
	@Register.dictionary("Difficulty", Difficulty)
	public readonly dictionaryDifficulty: Dictionary;

	@Mod.saveData(BALANCING_TOOLS_ID)
	public readonly saveData: ISaveData;

	@Register.registry(Actions)
	public actions: Actions;

	////////////////////////////////////
	// Actions
	//

	@Register.action("ToggleCreaturesFrozen", ToggleCreaturesFrozen)
	public readonly actionToggleCreaturesFrozen: ActionType;

	@Register.action("SetDifficulty", SetDifficulty)
	public readonly actionSetDifficulty: ActionType;

	@Register.action("SpawnCreatureLine", SpawnCreatureLine)
	public readonly actionSpawnCreatureLine: ActionType;

	////////////////////////////////////
	// Hooks
	//

	/**
	 * Disables creature movement
	 */
	@HookMethod
	public canCreatureMove(creature: ICreature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeCreatures) {
			return false;
		}

		return undefined;
	}
}
