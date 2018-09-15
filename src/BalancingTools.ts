import { IActionArgument, IActionDescriptionNamed, IActionResult } from "action/IAction";
import { ICreature } from "creature/ICreature";
import { CreatureType, MoveType, SkillType, TerrainType } from "Enums";
import { Dictionary } from "language/ILanguage";
import { HookMethod } from "mod/IHookHost";
import { InterModRegistration } from "mod/InterModRegistry";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import IPlayer from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import Enums from "utilities/enum/Enums";
import DebugTools from "../../debugtools/out/DebugTools";
import { ModRegistrationMainDialogPanel } from "../../debugtools/out/IDebugTools";
import BalancingToolsPanel from "./BalancingToolsPanel";
import { BalancingToolsTranslation, difficulties, Difficulty, ISaveData } from "./IBalancingTools";

function description(name: string): IActionDescriptionNamed {
	return { name, usableAsGhost: true, usableWhenPaused: true, ignoreHasDelay: true, ignoreIsMoving: true };
}

export default class BalancingTools extends Mod {

	@Mod.instance("Balancing Tools")
	public static readonly INSTANCE: BalancingTools;

	@Mod.instance<DebugTools>("Debug Tools")
	public readonly DEBUG_TOOLS: DebugTools;

	@Register.interModRegistration<ModRegistrationMainDialogPanel>("Debug Tools", "MainDialogPanel", BalancingToolsPanel)
	public readonly balancingToolsPanel: InterModRegistration<ModRegistrationMainDialogPanel>;

	@Register.dictionary("BalancingTools", BalancingToolsTranslation)
	public readonly dictionary: Dictionary;
	@Register.dictionary("Difficulty", Difficulty)
	public readonly dictionaryDifficulty: Dictionary;

	@Mod.saveData("Balancing Tools")
	public readonly saveData: ISaveData;

	////////////////////////////////////
	// Hooks
	//

	/**
	 * Disables creature movement
	 */
	@HookMethod
	public canCreatureMove(creature: ICreature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined {
		if (this.saveData.freezeCreatures) {
			return false;
		}

		return undefined;
	}

	////////////////////////////////////
	// Actions
	//

	/**
	 * Sets whether creatures are frozen
	 */
	@Register.action<boolean>(description("Toggle Creatures Frozen"))
	public toggleCreaturesFrozen(executor: IPlayer, { object: freezeCreatures }: IActionArgument<boolean>, result: IActionResult) {
		this.saveData.freezeCreatures = freezeCreatures;
	}

	/**
	 * Sets whether creatures are frozen
	 */
	@Register.action<Difficulty>({ name: "Set Difficulty" })
	public setDifficulty(executor: IPlayer, { object: difficulty }: IActionArgument<Difficulty>, result: IActionResult) {

		// delete all items
		itemManager.removeContainerItems(executor.inventory);

		// refresh stats (via Debug Tools)
		this.DEBUG_TOOLS.actions.heal(executor, { entity: executor }, result);

		// Equip and set skill based on input
		const skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Marksmanship, SkillType.Throwing];

		const { items, skill } = difficulties.get(difficulty)!;

		if (items) {
			for (let i = 0; i < items.length; i++) {
				const spawnInfo = items[i];
				const item = executor.createItemInInventory(spawnInfo.itemType);
				if (spawnInfo.equipType) {
					executor.equip(item, spawnInfo.equipType, true);
				}
			}
		}

		for (let i = 0; i < skillList.length; i++) {
			executor.skills[skillList[i]].percent = skill;
			executor.skills[skillList[i]].core = skill;
			executor.skillGain(skillList[i], 0, true);
		}

		result.passTurn = true;
	}

	/**
	 * Sets whether creatures are frozen
	 */
	@Register.action(description("Spawn Creature Line"))
	public spawnCreatureLine(executor: IPlayer, { object: freezeCreatures }: IActionArgument, result: IActionResult) {
		// Spawn creatures in a line
		for (const creatureType of Enums.values(CreatureType)) {
			const x = executor.x + 2;
			const y = executor.y + creatureType;

			game.changeTile(TerrainType.Dirt, x, y, executor.z, false);
			game.changeTile(TerrainType.Dirt, x + 1, y, executor.z, false);

			creatureManager.spawn(creatureType, x, y, executor.z, true);
			creatureManager.spawn(creatureType, x + 1, y, executor.z, true, true);
		}

		renderer.computeSpritesInViewport();
		result.updateRender = true;
		result.updateView = true;
	}
}
