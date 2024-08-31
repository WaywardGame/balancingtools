import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import Actions, { defaultUsability } from "../action/IAction";

/**
 * Sets whether NPCs are frozen
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, frozen) => {
		Actions.BALANCING_TOOLS.saveData.freezeNPCs = frozen;
	});
