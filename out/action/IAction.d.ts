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
