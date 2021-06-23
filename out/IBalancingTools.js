define(["require", "exports", "game/entity/IHuman", "game/item/IItem"], function (require, exports, IHuman_1, IItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.difficulties = exports.Difficulty = exports.BalancingToolsTranslation = exports.BALANCING_TOOLS_ID = void 0;
    exports.BALANCING_TOOLS_ID = "Balancing Tools";
    var BalancingToolsTranslation;
    (function (BalancingToolsTranslation) {
        BalancingToolsTranslation[BalancingToolsTranslation["PanelName"] = 0] = "PanelName";
        BalancingToolsTranslation[BalancingToolsTranslation["FreezeCreatures"] = 1] = "FreezeCreatures";
        BalancingToolsTranslation[BalancingToolsTranslation["SetDifficulty"] = 2] = "SetDifficulty";
        BalancingToolsTranslation[BalancingToolsTranslation["SpawnCreatureLine"] = 3] = "SpawnCreatureLine";
        BalancingToolsTranslation[BalancingToolsTranslation["FreezeNPCs"] = 4] = "FreezeNPCs";
    })(BalancingToolsTranslation = exports.BalancingToolsTranslation || (exports.BalancingToolsTranslation = {}));
    var Difficulty;
    (function (Difficulty) {
        Difficulty[Difficulty["Bark"] = 0] = "Bark";
        Difficulty[Difficulty["Leather"] = 1] = "Leather";
        Difficulty[Difficulty["Tin"] = 2] = "Tin";
        Difficulty[Difficulty["Scale"] = 3] = "Scale";
        Difficulty[Difficulty["Copper"] = 4] = "Copper";
        Difficulty[Difficulty["WroughtIron"] = 5] = "WroughtIron";
        Difficulty[Difficulty["Iron"] = 6] = "Iron";
        Difficulty[Difficulty["Bronze"] = 7] = "Bronze";
    })(Difficulty = exports.Difficulty || (exports.Difficulty = {}));
    exports.difficulties = new Map([
        [Difficulty.Bark, {
                skill: 12.5,
                items: [
                    {
                        itemType: IItem_1.ItemType.BarkShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.WoodenSpear,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.BarkTunic,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.BarkLeggings,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.Skullcap,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.Bow,
                    }, {
                        itemType: IItem_1.ItemType.WoodenArrow,
                    }, {
                        itemType: IItem_1.ItemType.WoodenArrow,
                    }, {
                        itemType: IItem_1.ItemType.WoodenArrow,
                    }, {
                        itemType: IItem_1.ItemType.CordedSling,
                    }, {
                        itemType: IItem_1.ItemType.StoneBullet,
                    }, {
                        itemType: IItem_1.ItemType.StoneBullet,
                    }, {
                        itemType: IItem_1.ItemType.StoneBullet,
                    },
                ],
            }],
        [Difficulty.Leather, {
                skill: 25,
                items: [
                    {
                        itemType: IItem_1.ItemType.WoodenShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.StoneAxe,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.LeatherTunic,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.LeatherPants,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.LeatherCap,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.LeatherBoots,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.LeatherGorget,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.LeatherGloves,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.LeatherBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.AnimalPelt,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.ShortBow,
                    }, {
                        itemType: IItem_1.ItemType.StoneArrow,
                    }, {
                        itemType: IItem_1.ItemType.StoneArrow,
                    }, {
                        itemType: IItem_1.ItemType.StoneArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.StoneBullet,
                    }, {
                        itemType: IItem_1.ItemType.StoneBullet,
                    }, {
                        itemType: IItem_1.ItemType.StoneBullet,
                    },
                ],
            }],
        [Difficulty.Tin, {
                skill: 37.5,
                items: [
                    {
                        itemType: IItem_1.ItemType.TinShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.TinSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.TinCuirass,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.TinChausses,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.TinHelmet,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.TinFootgear,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.TinBevor,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.TinGloves,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.LeatherBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.AnimalPelt,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.LongBow,
                    }, {
                        itemType: IItem_1.ItemType.TinArrow,
                    }, {
                        itemType: IItem_1.ItemType.TinArrow,
                    }, {
                        itemType: IItem_1.ItemType.TinArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.TinBullet,
                    }, {
                        itemType: IItem_1.ItemType.TinBullet,
                    }, {
                        itemType: IItem_1.ItemType.TinBullet,
                    },
                ],
            }],
        [Difficulty.Scale, {
                skill: 50,
                items: [
                    {
                        itemType: IItem_1.ItemType.WoodenShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.ObsidianAxe,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.ScaleVest,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.ScaleLeggings,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.ScaleCap,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.ScaleBoots,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.ScaleBevor,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.ScaleGloves,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.ScaleBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.AnimalPelt,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.LongBow,
                    }, {
                        itemType: IItem_1.ItemType.ObsidianArrow,
                    }, {
                        itemType: IItem_1.ItemType.ObsidianArrow,
                    }, {
                        itemType: IItem_1.ItemType.ObsidianArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.CopperBullet,
                    }, {
                        itemType: IItem_1.ItemType.CopperBullet,
                    }, {
                        itemType: IItem_1.ItemType.CopperBullet,
                    },
                ],
            }],
        [Difficulty.Copper, {
                skill: 62.5,
                items: [
                    {
                        itemType: IItem_1.ItemType.CopperBuckler,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.CopperSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.CopperCuirass,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.CopperGreaves,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.CopperHelmet,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.CopperBoots,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.CopperGorget,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.CopperGauntlets,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.LeatherBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.AnimalPelt,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.LongBow,
                    }, {
                        itemType: IItem_1.ItemType.CopperArrow,
                    }, {
                        itemType: IItem_1.ItemType.CopperArrow,
                    }, {
                        itemType: IItem_1.ItemType.CopperArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.CopperBullet,
                    }, {
                        itemType: IItem_1.ItemType.CopperBullet,
                    }, {
                        itemType: IItem_1.ItemType.CopperBullet,
                    },
                ],
            }],
        [Difficulty.WroughtIron, {
                skill: 75,
                items: [
                    {
                        itemType: IItem_1.ItemType.WroughtIronShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronBreastplate,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronCuisses,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronHelmet,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronBoots,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronGorget,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronGauntlets,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.LeatherBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.AnimalPelt,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.LongBow,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronArrow,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronArrow,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronBullet,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronBullet,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronBullet,
                    },
                ],
            }],
        [Difficulty.Iron, {
                skill: 87.5,
                items: [
                    {
                        itemType: IItem_1.ItemType.IronHeater,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.IronSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.IronBreastplate,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.IronCuisses,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.IronHelmet,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.IronBoots,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.IronGorget,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.IronGauntlets,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.ScaleBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.MageRobe,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.CompositeBow,
                    }, {
                        itemType: IItem_1.ItemType.IronArrow,
                    }, {
                        itemType: IItem_1.ItemType.IronArrow,
                    }, {
                        itemType: IItem_1.ItemType.IronArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.IronBullet,
                    }, {
                        itemType: IItem_1.ItemType.IronBullet,
                    }, {
                        itemType: IItem_1.ItemType.IronBullet,
                    },
                ],
            }],
        [Difficulty.Bronze, {
                skill: 100,
                items: [
                    {
                        itemType: IItem_1.ItemType.BronzeKiteShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.BronzeSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.BronzeChestArmor,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.BronzeGreaves,
                        equipType: IHuman_1.EquipType.Legs,
                    }, {
                        itemType: IItem_1.ItemType.BronzeHelmet,
                        equipType: IHuman_1.EquipType.Head,
                    }, {
                        itemType: IItem_1.ItemType.BronzeBoots,
                        equipType: IHuman_1.EquipType.Feet,
                    }, {
                        itemType: IItem_1.ItemType.BronzeBevor,
                        equipType: IHuman_1.EquipType.Neck,
                    }, {
                        itemType: IItem_1.ItemType.BronzeGauntlets,
                        equipType: IHuman_1.EquipType.Hands,
                    }, {
                        itemType: IItem_1.ItemType.ScaleBelt,
                        equipType: IHuman_1.EquipType.Belt,
                    }, {
                        itemType: IItem_1.ItemType.MageRobe,
                        equipType: IHuman_1.EquipType.Back,
                    }, {
                        itemType: IItem_1.ItemType.CompositeBow,
                    }, {
                        itemType: IItem_1.ItemType.BronzeArrow,
                    }, {
                        itemType: IItem_1.ItemType.BronzeArrow,
                    }, {
                        itemType: IItem_1.ItemType.BronzeArrow,
                    }, {
                        itemType: IItem_1.ItemType.LeatherSling,
                    }, {
                        itemType: IItem_1.ItemType.BronzeBullet,
                    }, {
                        itemType: IItem_1.ItemType.BronzeBullet,
                    }, {
                        itemType: IItem_1.ItemType.BronzeBullet,
                    },
                ],
            }],
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUJhbGFuY2luZ1Rvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0lCYWxhbmNpbmdUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBR2EsUUFBQSxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztJQUVwRCxJQUFZLHlCQU1YO0lBTkQsV0FBWSx5QkFBeUI7UUFDcEMsbUZBQVMsQ0FBQTtRQUNULCtGQUFlLENBQUE7UUFDZiwyRkFBYSxDQUFBO1FBQ2IsbUdBQWlCLENBQUE7UUFDakIscUZBQVUsQ0FBQTtJQUNYLENBQUMsRUFOVyx5QkFBeUIsR0FBekIsaUNBQXlCLEtBQXpCLGlDQUF5QixRQU1wQztJQU9ELElBQVksVUFTWDtJQVRELFdBQVksVUFBVTtRQUNyQiwyQ0FBSSxDQUFBO1FBQ0osaURBQU8sQ0FBQTtRQUNQLHlDQUFHLENBQUE7UUFDSCw2Q0FBSyxDQUFBO1FBQ0wsK0NBQU0sQ0FBQTtRQUNOLHlEQUFXLENBQUE7UUFDWCwyQ0FBSSxDQUFBO1FBQ0osK0NBQU0sQ0FBQTtJQUNQLENBQUMsRUFUVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVNyQjtJQVlZLFFBQUEsWUFBWSxHQUFHLElBQUksR0FBRyxDQUEwQjtRQUM1RCxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRTtvQkFDTjt3QkFDQyxRQUFRLEVBQUUsZ0JBQVEsQ0FBQyxVQUFVO3dCQUM3QixTQUFTLEVBQUUsa0JBQVMsQ0FBQyxRQUFRO3FCQUM3QixFQUFFO3dCQUNGLFFBQVEsRUFBRSxnQkFBUSxDQUFDLFdBQVc7d0JBQzlCLFNBQVMsRUFBRSxrQkFBUyxDQUFDLFNBQVM7cUJBQzlCLEVBQUU7d0JBQ0YsUUFBUSxFQUFFLGdCQUFRLENBQUMsU0FBUzt3QkFDNUIsU0FBUyxFQUFFLGtCQUFTLENBQUMsS0FBSztxQkFDMUIsRUFBRTt3QkFDRixRQUFRLEVBQUUsZ0JBQVEs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