import { EquipType, ItemType } from "Enums";

export enum BalancingToolsTranslation {
	PanelName,
	FreezeCreatures,
	SetDifficulty,
	SpawnCreatureLine
}

export interface ISaveData {
	freezeCreatures?: boolean;
}

export enum Difficulty {
	Bark,
	Leather,
	Copper,
	WroughtIron,
	Iron
}

export interface IItemSpawnInfo {
	itemType: ItemType;
	equipType?: EquipType;
}

export interface IDifficulty {
	items: IItemSpawnInfo[];
	skill: number;
}

export const difficulties = new Map<Difficulty, IDifficulty>([
	[Difficulty.Bark, {
		skill: 15,
		items: [
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
		]
	}],
	[Difficulty.Leather, {
		skill: 35,
		items: [
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
		]
	}],
	[Difficulty.Copper, {
		skill: 50,
		items: [
			{
				itemType: ItemType.CopperShield,
				equipType: EquipType.LeftHand
			}, {
				itemType: ItemType.CopperSword,
				equipType: EquipType.RightHand
			}, {
				itemType: ItemType.CopperBreastPlate,
				equipType: EquipType.Chest
			}, {
				itemType: ItemType.CopperGreaves,
				equipType: EquipType.Legs
			}, {
				itemType: ItemType.CopperHelmet,
				equipType: EquipType.Head
			}, {
				itemType: ItemType.CopperBoots,
				equipType: EquipType.Feet
			}, {
				itemType: ItemType.CopperGorget,
				equipType: EquipType.Neck
			}, {
				itemType: ItemType.CopperGauntlets,
				equipType: EquipType.Hands
			}, {
				itemType: ItemType.LeatherBelt,
				equipType: EquipType.Belt
			}, {
				itemType: ItemType.LongBow
			}, {
				itemType: ItemType.CopperArrow
			}, {
				itemType: ItemType.CopperArrow
			}, {
				itemType: ItemType.CopperArrow
			}, {
				itemType: ItemType.LeatherSling
			}, {
				itemType: ItemType.CopperBullet
			}, {
				itemType: ItemType.CopperBullet
			}, {
				itemType: ItemType.CopperBullet
			}
		]
	}],
	[Difficulty.WroughtIron, {
		skill: 60,
		items: [
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
		]
	}],
	[Difficulty.Iron, {
		skill: 85,
		items: [
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
		]
	}]
]);
