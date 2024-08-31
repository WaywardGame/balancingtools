import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import Actions, { defaultUsability } from "../action/IAction";

/**
 * Sets whether creatures have attacks disabled
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(...defaultUsability)
	.setHandler((action, disable) => {
		Actions.BALANCING_TOOLS.saveData.disableAttackCreatures = disable;
	});
