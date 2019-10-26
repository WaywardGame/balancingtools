import { Action } from "entity/action/Action";
import { ActionArgument } from "entity/action/IAction";
import { EntityType } from "entity/IEntity";

import Actions, { defaultUsability } from "../action/IAction";

/**
 * Sets whether NPCs are frozen
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Player)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, frozen) => {
		Actions.BALANCING_TOOLS.saveData.freezeNPCs = frozen;
	});
