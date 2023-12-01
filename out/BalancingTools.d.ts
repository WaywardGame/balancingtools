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
import DebugTools, { ModRegistrationMainDialogPanel } from "@wayward/debugtools";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import Creature from "@wayward/game/game/entity/creature/Creature";
import { MoveType } from "@wayward/game/game/entity/IEntity";
import NPC from "@wayward/game/game/entity/npc/NPC";
import Tile from "@wayward/game/game/tile/Tile";
import Dictionary from "@wayward/game/language/Dictionary";
import { InterModRegistration } from "@wayward/game/mod/InterModRegistry";
import Mod from "@wayward/game/mod/Mod";
import Actions from "./action/IAction";
import { ISaveData } from "./IBalancingTools";
import Human from "@wayward/game/game/entity/Human";
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
    readonly actionToggleCreaturesDisableAttack: ActionType;
    readonly actionToggleNPCsDisableAttack: ActionType;
    readonly actionSetEquipment: ActionType;
    readonly actionSetSkills: ActionType;
    readonly actionSpawnCreatureLine: ActionType;
    canCreatureMove(creature: Creature, tile: Tile, moveType: MoveType): boolean | undefined;
    canAttack(enemy: Human | Creature): boolean | undefined;
    canNPCMove(npc: NPC, tile: Tile, moveType: MoveType): boolean | undefined;
    canNPCAttack(): boolean | undefined;
}
