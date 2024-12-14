import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionUsability } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import Actions from "../action/IAction";

/**
 * Sets whether creatures are frozen
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(ActionUsability.Always)
	.setHandler((action, frozen) => {
		Actions.BALANCING_TOOLS.saveData.freezeCreatures = frozen;
	});
