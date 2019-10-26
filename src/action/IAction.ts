import { ActionUsability } from "entity/action/IAction";
import Mod from "mod/Mod";
import Log from "utilities/Log";

import DebugTools from "../../../debugtools/out/DebugTools";
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
