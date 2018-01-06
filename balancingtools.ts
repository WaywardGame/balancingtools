import Creatures from "creature/Creatures";
import { ICreature } from "creature/ICreature";
import { CreatureType, EquipType, ItemType, MoveType, PlayerState, SkillType, Source, TerrainType } from "Enums";
import { IModInfo } from "mod/IModManager";
import Mod from "mod/Mod";
import { ITile } from "tile/ITerrain";
import * as Utilities from "Utilities";

interface IItemSpawnInfo {
	itemType: ItemType;
	equipType?: EquipType;
}

export default class BalancingTools extends Mod {
	private container: JQuery;
	private developerTools: IModInfo;

	public onLoad(saveData: any): void {
		this.developerTools = modManager.getLoadedModByName("Developer Tools");
		if (this.developerTools) {
			Utilities.Console.log(Source.Mod, "Found developer tools mod from balancing tools.", this.developerTools);
		}
	}

	public onUnload(): void {
		if (this.container) {
			this.container.remove();
		}
	}

	///////////////////////////////////////////////////
	// Hooks

	// Turn off creature movement
	public canCreatureMove(creature: ICreature, tile: ITile, moveType: MoveType): boolean {
		return false;
	}

	public onShowInGameScreen(): void {

		if (this.developerTools) {

			// Wait a bit for developer tools to create its dialog
			setTimeout(() => {
				this.container = $("<div></div>");
	
				this.container.append($('<input id="difficulty" type="number" value="0" min="0" max="4" />'));
	
				this.container.append($("<button>Set Difficulty</button>").click(() => {
	
					const difficulty = parseInt($("body").find("#difficulty").val(), 10);
	
					// delete all items
					const items = itemManager.getItemsInContainer(localPlayer.inventory);
					for (let i = items.length - 1; i >= 0; i--) {
						itemManager.remove(items[i]);
					}
	
					// refresh stats (via Developer Tools)
					ui.getBody().find("button:contains('Refresh Stats')").first().trigger("click");
	
					// Equip and set skill based on input
					const skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Archery, SkillType.Throwing];
					let skillAmount = 0;
	
					let list: IItemSpawnInfo[];
	
					switch (difficulty) {
						case 1:
							list = [
								{
									itemType: ItemType.BarkShield,
									equipType: EquipType.LeftHand
								}, {
									itemType: ItemType.WoodenSpear,
									equipType: EquipType.RightHand
								}, {
									itemType: ItemType.BarkTunic,
									equipType: EquipType.Chest
								}, {
									itemType: ItemType.BarkLeggings,
									equipType: EquipType.Legs
								}, {
									itemType: ItemType.Skullcap,
									equipType: EquipType.Head
								}, {
									itemType: ItemType.Bow
								}, {
									itemType: ItemType.WoodenArrow
								}, {
									itemType: ItemType.WoodenArrow
								}, {
									itemType: ItemType.WoodenArrow
								}, {
									itemType: ItemType.CordedSling
								}, {
									itemType: ItemType.StoneBullet
								}, {
									itemType: ItemType.StoneBullet
								}, {
									itemType: ItemType.StoneBullet
								}
							];
	
							skillAmount = 15;
	
							break;
						case 2:
							list = [
								{
									itemType: ItemType.BarkShield,
									equipType: EquipType.LeftHand
								}, {
									itemType: ItemType.StoneAxe,
									equipType: EquipType.RightHand
								}, {
									itemType: ItemType.LeatherTunic,
									equipType: EquipType.Chest
								}, {
									itemType: ItemType.LeatherPants,
									equipType: EquipType.Legs
								}, {
									itemType: ItemType.LeatherCap,
									equipType: EquipType.Head
								}, {
									itemType: ItemType.LeatherBoots,
									equipType: EquipType.Feet
								}, {
									itemType: ItemType.LeatherGorget,
									equipType: EquipType.Neck
								}, {
									itemType: ItemType.LeatherGloves,
									equipType: EquipType.Hands
								}, {
									itemType: ItemType.LeatherBelt,
									equipType: EquipType.Belt
								}, {
									itemType: ItemType.ShortBow
								}, {
									itemType: ItemType.StoneArrow
								}, {
									itemType: ItemType.StoneArrow
								}, {
									itemType: ItemType.StoneArrow
								}, {
									itemType: ItemType.LeatherSling
								}, {
									itemType: ItemType.StoneBullet
								}, {
									itemType: ItemType.StoneBullet
								}, {
									itemType: ItemType.StoneBullet
								}
							];
	
							skillAmount = 35;
	
							break;
						case 3:
							list = [
								{
									itemType: ItemType.WroughtIronShield,
									equipType: EquipType.LeftHand
								}, {
									itemType: ItemType.WroughtIronSword,
									equipType: EquipType.RightHand
								}, {
									itemType: ItemType.WroughtIronBreastPlate,
									equipType: EquipType.Chest
								}, {
									itemType: ItemType.WroughtIronGreaves,
									equipType: EquipType.Legs
								}, {
									itemType: ItemType.WroughtIronHelmet,
									equipType: EquipType.Head
								}, {
									itemType: ItemType.WroughtIronBoots,
									equipType: EquipType.Feet
								}, {
									itemType: ItemType.WroughtIronGorget,
									equipType: EquipType.Neck
								}, {
									itemType: ItemType.WroughtIronGauntlets,
									equipType: EquipType.Hands
								}, {
									itemType: ItemType.LeatherBelt,
									equipType: EquipType.Belt
								}, {
									itemType: ItemType.LongBow
								}, {
									itemType: ItemType.WroughtIronArrow
								}, {
									itemType: ItemType.WroughtIronArrow
								}, {
									itemType: ItemType.WroughtIronArrow
								}, {
									itemType: ItemType.LeatherSling
								}, {
									itemType: ItemType.WroughtIronBullet
								}, {
									itemType: ItemType.WroughtIronBullet
								}, {
									itemType: ItemType.WroughtIronBullet
								}
							];
	
							skillAmount = 60;
	
							break;
						case 4:
							list = [
								{
									itemType: ItemType.IronShield,
									equipType: EquipType.LeftHand
								}, {
									itemType: ItemType.IronSword,
									equipType: EquipType.RightHand
								}, {
									itemType: ItemType.IronBreastplate,
									equipType: EquipType.Chest
								}, {
									itemType: ItemType.IronGreaves,
									equipType: EquipType.Legs
								}, {
									itemType: ItemType.IronHelmet,
									equipType: EquipType.Head
								}, {
									itemType: ItemType.IronBoots,
									equipType: EquipType.Feet
								}, {
									itemType: ItemType.IronGorget,
									equipType: EquipType.Neck
								}, {
									itemType: ItemType.IronGauntlets,
									equipType: EquipType.Hands
								}, {
									itemType: ItemType.LeatherBelt,
									equipType: EquipType.Belt
								}, {
									itemType: ItemType.CompositeBow
								}, {
									itemType: ItemType.IronArrow
								}, {
									itemType: ItemType.IronArrow
								}, {
									itemType: ItemType.IronArrow
								}, {
									itemType: ItemType.LeatherSling
								}, {
									itemType: ItemType.IronBullet
								}, {
									itemType: ItemType.IronBullet
								}, {
									itemType: ItemType.IronBullet
								}
							];
	
							skillAmount = 85;
	
							break;
					}
	
					if (list) {
						for (let i = 0; i < list.length; i++) {
							const spawnInfo = list[i];
							const item = localPlayer.createItemInInventory(spawnInfo.itemType);
							if (spawnInfo.equipType) {
								localPlayer.equip(item, spawnInfo.equipType, true);
							}
						}
					}
	
					for (let i = 0; i < skillList.length; i++) {
						localPlayer.skills[skillList[i]].percent = skillAmount;
						localPlayer.skills[skillList[i]].core = skillAmount;
					}
	
					game.passTurn(localPlayer);
				}));
	
				this.container.append($("<button>Spawn Creature Line</button>").click(() => {
	
					// Spawn stationary creatures in a line
					for (const creatureType of Utilities.Enums.getValues(CreatureType)) {
						const x = localPlayer.x + 2;
						const y = localPlayer.y + creatureType;
	
						game.changeTile(TerrainType.Dirt, x, y, localPlayer.z, false);
						game.changeTile(TerrainType.Dirt, x + 1, y, localPlayer.z, false);
	
						creatureManager.spawn(creatureType, x, y, localPlayer.z, true);
						creatureManager.spawn(creatureType, x + 1, y, localPlayer.z, true, true);
					}
	
					game.passTurn(localPlayer);
				}));
	
				this.getDialog("Developer Tools").find(".inner").append(this.container);
			}, 100);
		}
	}
}
