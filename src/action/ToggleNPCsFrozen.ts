import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionUsability } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import Mod from "@wayward/game/mod/Mod";
import type BalancingToolsMod from "../BalancingTools";

const BalancingTools = Mod.get<BalancingToolsMod>();

/**
 * Sets whether NPCs are frozen
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(ActionUsability.Always)
	.setHandler((action, frozen) => {
		if (BalancingTools?.instance) {
			BalancingTools.instance.saveData.freezeNPCs = frozen;
		}
	})
	.modRegistration("ToggleNPCsFrozen");
