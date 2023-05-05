import DebugTools, { ModRegistrationMainDialogPanel } from "@wayward/debugtools";
import { ActionType } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import { MoveType } from "game/entity/IEntity";
import NPC from "game/entity/npc/NPC";
import Tile from "game/tile/Tile";
import Dictionary from "language/Dictionary";
import { InterModRegistration } from "mod/InterModRegistry";
import Mod from "mod/Mod";
import Actions from "./action/IAction";
import { ISaveData } from "./IBalancingTools";
export default class BalancingTools extends Mod {
    static readonly INSTANCE: BalancingTools;
    readonly DEBUG_TOOLS: DebugTools;
    readonly balancingToolsPanel: InterModRegistration<ModRegistrationMainDialogPanel>;
    readonly dictionary: Dictionary;
    readonly dictionaryEquipment: Dictionary;
    readonly saveData: ISaveData;
    actions: Actions;
    readonly actionToggleCreaturesFrozen: ActionType;
    readonly actionToggleNPCsFrozen: ActionType;
    readonly actionSetEquipment: ActionType;
    readonly actionSetSkills: ActionType;
    readonly actionSpawnCreatureLine: ActionType;
    canCreatureMove(creature: Creature, tile: Tile, moveType: MoveType): boolean | undefined;
    canNPCMove(npc: NPC, tile: Tile, moveType: MoveType): boolean | undefined;
}
