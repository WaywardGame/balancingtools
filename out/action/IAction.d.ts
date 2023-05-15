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
import { ActionUsability } from "game/entity/action/IAction";
import Log from "utilities/Log";
import DebugTools from "@wayward/debugtools";
import BalancingTools from "../BalancingTools";
export declare const defaultUsability: ActionUsability[];
export default class Actions {
    static readonly BALANCING_TOOLS: BalancingTools;
    static readonly LOG: Log;
    static readonly DEBUG_TOOLS: DebugTools;
}
