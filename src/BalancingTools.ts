import { EventHandler } from "@wayward/game/event/EventManager";
import Creature from "@wayward/game/game/entity/creature/Creature";
import type { MoveType } from "@wayward/game/game/entity/IEntity";
import NPC from "@wayward/game/game/entity/npc/NPC";
import type Tile from "@wayward/game/game/tile/Tile";
import Mod from "@wayward/game/mod/Mod";
import BalancingToolsPanel from "./BalancingToolsPanel";
import type { ISaveData } from "./IBalancingTools";
import { BALANCING_TOOLS_ID } from "./IBalancingTools";
import type Human from "@wayward/game/game/entity/Human";

Mod.register.interModRegistration("Debug Tools", "MainDialogPanel", BalancingToolsPanel);

export default class BalancingTools extends Mod {

	@Mod.saveData(BALANCING_TOOLS_ID)
	public readonly saveData: ISaveData;

	////////////////////////////////////
	// Event Handlers
	//

	/**
	 * Disables creature movement
	 */
	@EventHandler(Creature, "canMove")
	public canCreatureMove(creature: Creature, tile: Tile, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeCreatures) {
			return false;
		}

		return undefined;
	}

	@EventHandler(Creature, "canAttack")
	public canAttack(enemy: Human | Creature): boolean | undefined {
		if (this.saveData.disableAttackCreatures) {
			return false;
		}

		return undefined;
	}

	/**
	 * Disables NPC movement and creature attacks
	 */
	@EventHandler(NPC, "canNPCMove")
	public canNPCMove(npc: NPC, tile: Tile, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeNPCs) {
			return false;
		}

		return undefined;
	}

	@EventHandler(NPC, "canNPCAttack")
	public canNPCAttack(): boolean | undefined {
		if (this.saveData.disableAttackNPCs) {
			return false;
		}

		return undefined;
	}

}
