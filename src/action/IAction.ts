import DebugTools from "@wayward/debugtools";
import { ActionUsability } from "@wayward/game/game/entity/action/IAction";
import Mod from "@wayward/game/mod/Mod";
import Log from "@wayward/utilities/Log";
import BalancingTools from "../BalancingTools";
import { BALANCING_TOOLS_ID } from "../IBalancingTools";

export const defaultUsability: ActionUsability[] = [ActionUsability.Ghost, ActionUsability.Paused, ActionUsability.Delayed, ActionUsability.Moving];

export default class Actions {
	@Mod.instance<BalancingTools>(BALANCING_TOOLS_ID)
	public static readonly BALANCING_TOOLS: BalancingTools;
	@Mod.log(BALANCING_TOOLS_ID)
	public static readonly LOG: Log;
	@Mod.instance<DebugTools>("Debug Tools")
	public static readonly DEBUG_TOOLS: DebugTools;
}