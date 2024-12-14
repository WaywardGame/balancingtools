import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionUsability } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import Actions from "../action/IAction";

/**
 * Sets whether NPCs have attacks disabled
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(ActionUsability.Always)
	.setHandler((action, disable) => {
		Actions.BALANCING_TOOLS.saveData.disableAttackNPCs = disable;
	});
