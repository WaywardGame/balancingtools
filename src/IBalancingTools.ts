/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */

import { EquipType } from "@wayward/game/game/entity/IHuman";
import { ItemType } from "@wayward/game/game/item/IItem";

export const BALANCING_TOOLS_ID = "Balancing Tools";

export enum BalancingToolsTranslation {
	PanelName,
	FreezeCreatures,
	EquipmentQuality,
	SetEquipment,
	SetSkills,
	SpawnCreatureLine,
	FreezeNPCs,
	DisableAttackCreatures,
	DisableAttackNPCs,
}

export interface ISaveData {
	freezeCreatures?: boolean;
	freezeNPCs?: boolean;
	disableAttackCreatures?: boolean;
	disableAttackNPCs?: boolean;
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.WoodenSpear,
				equipType: EquipType.MainHand,
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
				itemType: ItemType.GraniteBullet,
			}, {
				itemType: ItemType.GraniteBullet,
			}, {
				itemType: ItemType.GraniteBullet,
			},
		],
	}],
	[EquipmentSet.Leather, {
		items: [
			{
				itemType: ItemType.WoodenShield,
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.GraniteAxe,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
			}, {
				itemType: ItemType.AnimalPelt,
				equipType: EquipType.Back,
			}, {
				itemType: ItemType.ShortBow,
			}, {
				itemType: ItemType.GraniteArrow,
			}, {
				itemType: ItemType.GraniteArrow,
			}, {
				itemType: ItemType.GraniteArrow,
			}, {
				itemType: ItemType.LeatherSling,
			}, {
				itemType: ItemType.GraniteBullet,
			}, {
				itemType: ItemType.GraniteBullet,
			}, {
				itemType: ItemType.GraniteBullet,
			},
		],
	}],
	[EquipmentSet.Tin, {
		items: [
			{
				itemType: ItemType.TinShield,
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.TinShortSword,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.ObsidianAxe,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.CopperShortSword,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.Macuahuitl,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.WroughtIronShortSword,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.IronShortSword,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.BronzeShortSword,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
				equipType: EquipType.OffHand,
			}, {
				itemType: ItemType.DeathKnightAxe,
				equipType: EquipType.MainHand,
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
				equipType: EquipType.Waist,
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
