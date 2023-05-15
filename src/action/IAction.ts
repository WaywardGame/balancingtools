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
import Mod from "mod/Mod";
import Log from "utilities/Log";
import DebugTools from "@wayward/debugtools";
import BalancingTools from "../BalancingTools";
import { BALANCING_TOOLS_ID } from "../IBalancingTools";

export const defaultUsability: ActionUsability[] = [ActionUsability.Ghost, ActionUsability.Paused, ActionUsability.Delayed, ActionUsability.Moving];

// (dumb — doesn't know about decorators not being able to be in normal objects)
// tslint:disable-next-line
export default class Actions {
	@Mod.instance<BalancingTools>(BALANCING_TOOLS_ID)
	public static readonly BALANCING_TOOLS: BalancingTools;
	@Mod.log(BALANCING_TOOLS_ID)
	public static readonly LOG: Log;
	@Mod.instance<DebugTools>("Debug Tools")
	public static readonly DEBUG_TOOLS: DebugTools;
}