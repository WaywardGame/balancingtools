import { EquipType } from "game/entity/IHuman";
import { ItemType } from "game/item/IItem";

export const BALANCING_TOOLS_ID = "Balancing Tools";

export enum BalancingToolsTranslation {
	PanelName,
	FreezeCreatures,
	SetEquipment,
	SetSkills,
	SpawnCreatureLine,
	FreezeNPCs,
}

export interface ISaveData {
	freezeCreatures?: boolean;
	freezeNPCs?: boolean;
}

export enum EquipmentSet {
	Bark,
	Leather,
	Tin,
	Scale,
	Copper,
	ArmoredScale,
	WroughtIron,
	Iron,
	Bronze,
	Blackplate,
}

export interface IItemSpawnInfo {
	itemType: ItemType;
	equipType?: EquipType;
}

export interface IEquipmentSet {
	items: IItemSpawnInfo[];
}

export const equipmentSets = new Map<EquipmentSet, IEquipmentSet>([
	[EquipmentSet.Bark, {
		items: [
			{
				itemType: ItemType.BarkShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.WoodenSpear,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.BarkTunic,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.BarkLeggings,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.Skullcap,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.Bow,
			}, {
				itemType: ItemType.WoodenArrow,
			}, {
				itemType: ItemType.WoodenArrow,
			}, {
				itemType: ItemType.WoodenArrow,
			}, {
				itemType: ItemType.CordedSling,
			}, {
				itemType: ItemType.StoneBullet,
			}, {
				itemType: ItemType.StoneBullet,
			}, {
				itemType: ItemType.StoneBullet,
			},
		],
	}],
	[EquipmentSet.Leather, {
		items: [
			{
				itemType: ItemType.WoodenShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.StoneAxe,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.LeatherTunic,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.LeatherPants,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.LeatherCap,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.LeatherBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.LeatherGorget,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.LeatherGloves,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.LeatherBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.ShortBow,
			}, {
				itemType: ItemType.StoneArrow,
			}, {
				itemType: ItemType.StoneArrow,
			}, {
				itemType: ItemType.StoneArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.StoneBullet,
			}, {
				itemType: ItemType.StoneBullet,
			}, {
				itemType: ItemType.StoneBullet,
			},
		],
	}],
	[EquipmentSet.Tin, {
		items: [
			{
				itemType: ItemType.TinShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.TinSword,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.TinCuirass,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.TinChausses,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.TinHelmet,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.TinFootgear,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.TinBevor,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.TinGloves,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.LeatherBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.LongBow,
			}, {
				itemType: ItemType.TinArrow,
			}, {
				itemType: ItemType.TinArrow,
			}, {
				itemType: ItemType.TinArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.TinBullet,
			}, {
				itemType: ItemType.TinBullet,
			}, {
				itemType: ItemType.TinBullet,
			},
		],
	}],
	[EquipmentSet.Scale, {
		items: [
			{
				itemType: ItemType.WoodenShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.ObsidianAxe,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.ScaleVest,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.ScaleLeggings,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.ScaleCap,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.ScaleBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.ScaleBevor,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.ScaleGloves,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.ScaleBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.LongBow,
			}, {
				itemType: ItemType.ObsidianArrow,
			}, {
				itemType: ItemType.ObsidianArrow,
			}, {
				itemType: ItemType.ObsidianArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.CopperBullet,
			}, {
				itemType: ItemType.CopperBullet,
			}, {
				itemType: ItemType.CopperBullet,
			},
		],
	}],
	[EquipmentSet.Copper, {
		items: [
			{
				itemType: ItemType.CopperBuckler,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.CopperSword,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.CopperCuirass,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.CopperGreaves,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.CopperHelmet,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.CopperBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.CopperGorget,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.CopperGauntlets,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.LeatherBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.LongBow,
			}, {
				itemType: ItemType.CopperArrow,
			}, {
				itemType: ItemType.CopperArrow,
			}, {
				itemType: ItemType.CopperArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.CopperBullet,
			}, {
				itemType: ItemType.CopperBullet,
			}, {
				itemType: ItemType.CopperBullet,
			},
		],
	}],
	[EquipmentSet.ArmoredScale, {
		items: [
			{
				itemType: ItemType.WoodenShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.Macuahuitl,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.ArmoredScaleVest,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.ArmoredScaleCuisses,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.ArmoredScaleCrown,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.ArmoredScaleBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.ArmoredScaleBevor,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.ArmoredScaleGloves,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.ArmoredScaleBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.LongBow,
			}, {
				itemType: ItemType.ObsidianArrow,
			}, {
				itemType: ItemType.ObsidianArrow,
			}, {
				itemType: ItemType.ObsidianArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.CopperBullet,
			}, {
				itemType: ItemType.CopperBullet,
			}, {
				itemType: ItemType.CopperBullet,
			},
		],
	}],
	[EquipmentSet.WroughtIron, {
		items: [
			{
				itemType: ItemType.WroughtIronShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.WroughtIronSword,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.WroughtIronBreastplate,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.WroughtIronCuisses,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.WroughtIronHelmet,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.WroughtIronBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.WroughtIronGorget,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.WroughtIronGauntlets,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.LeatherBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.LongBow,
			}, {
				itemType: ItemType.WroughtIronArrow,
			}, {
				itemType: ItemType.WroughtIronArrow,
			}, {
				itemType: ItemType.WroughtIronArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.WroughtIronBullet,
			}, {
				itemType: ItemType.WroughtIronBullet,
			}, {
				itemType: ItemType.WroughtIronBullet,
			},
		],
	}],
	[EquipmentSet.Iron, {
		items: [
			{
				itemType: ItemType.IronHeater,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.IronSword,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.IronBreastplate,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.IronCuisses,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.IronHelmet,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.IronBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.IronGorget,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.IronGauntlets,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.ScaleBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.MageRobe,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.CompositeBow,
			}, {
				itemType: ItemType.IronArrow,
			}, {
				itemType: ItemType.IronArrow,
			}, {
				itemType: ItemType.IronArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.IronBullet,
			}, {
				itemType: ItemType.IronBullet,
			}, {
				itemType: ItemType.IronBullet,
			},
		],
	}],
	[EquipmentSet.Bronze, {
		items: [
			{
				itemType: ItemType.BronzeKiteShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.BronzeSword,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.BronzeChestArmor,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.BronzeGreaves,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.BronzeHelmet,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.BronzeBoots,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.BronzeBevor,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.BronzeGauntlets,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.ArmoredScaleBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.MageRobe,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.CompositeBow,
			}, {
				itemType: ItemType.BronzeArrow,
			}, {
				itemType: ItemType.BronzeArrow,
			}, {
				itemType: ItemType.BronzeArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.BronzeBullet,
			}, {
				itemType: ItemType.BronzeBullet,
			}, {
				itemType: ItemType.BronzeBullet,
			},
		],
	}],
	[EquipmentSet.Blackplate, {
		items: [
			{
				itemType: ItemType.BronzeKiteShield,
				equipType: EquipType.LeftHand,
			}, {
				itemType: ItemType.DeathKnightAxe,
				equipType: EquipType.RightHand,
			}, {
				itemType: ItemType.BlackplateBreastplate,
				equipType: EquipType.Chest,
			}, {
				itemType: ItemType.BlackplateGreaves,
				equipType: EquipType.Legs,
			}, {
				itemType: ItemType.BlackplateHelmet,
				equipType: EquipType.Head,
			}, {
				itemType: ItemType.BlackplateSabatons,
				equipType: EquipType.Feet,
			}, {
				itemType: ItemType.BlackplateGorget,
				equipType: EquipType.Neck,
			}, {
				itemType: ItemType.BlackplateGauntlets,
				equipType: EquipType.Hands,
			}, {
				itemType: ItemType.ScaleBelt,
				equipType: EquipType.Belt,
			}, {
				itemType: ItemType.MageRobe,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.CompositeBow,
			}, {
				itemType: ItemType.BronzeArrow,
			}, {
				itemType: ItemType.BronzeArrow,
			}, {
				itemType: ItemType.BronzeArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.BronzeBullet,
			}, {
				itemType: ItemType.BronzeBullet,
			}, {
				itemType: ItemType.BronzeBullet,
			},
		],
	}],
]);
