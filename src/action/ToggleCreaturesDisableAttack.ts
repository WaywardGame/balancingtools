import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionUsability } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import type BalancingToolsMod from "../BalancingTools";
import Mod from "@wayward/game/mod/Mod";

const BalancingTools = Mod.get<BalancingToolsMod>();

/**
 * Sets whether creatures have attacks disabled
 */
export default new Action(ActionArgument.Boolean)
	.setUsableBy(EntityType.Human)
	.setUsableWhen(ActionUsability.Always)
	.setHandler((action, disable) => {
		if (BalancingTools?.instance) {
			BalancingTools.instance.saveData.disableAttackCreatures = disable;
		}
	})
	.modRegistration("ToggleCreaturesDisableAttack");
