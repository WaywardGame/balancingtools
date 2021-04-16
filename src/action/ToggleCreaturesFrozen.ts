import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import { EntityType } from "game/entity/IEntity";
import Actions, { defaultUsability } from "../action/IAction";

/**
 * Sets whether creatures are frozen
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Player)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, frozen) => {
		Actions.BALANCING_TOOLS.saveData.freezeCreatures = frozen;
	});
