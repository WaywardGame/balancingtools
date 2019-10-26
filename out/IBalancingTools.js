define(["require", "exports", "entity/IHuman", "item/IItem"], function (require, exports, IHuman_1, IItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        Difficulty[Difficulty["Copper"] = 2] = "Copper";
        Difficulty[Difficulty["WroughtIron"] = 3] = "WroughtIron";
        Difficulty[Difficulty["Iron"] = 4] = "Iron";
    })(Difficulty = exports.Difficulty || (exports.Difficulty = {}));
    exports.difficulties = new Map([
        [Difficulty.Bark, {
                skill: 15,
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
                skill: 35,
                items: [
                    {
                        itemType: IItem_1.ItemType.BarkShield,
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
        [Difficulty.Copper, {
                skill: 50,
                items: [
                    {
                        itemType: IItem_1.ItemType.CopperShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.CopperSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.CopperBreastPlate,
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
                skill: 60,
                items: [
                    {
                        itemType: IItem_1.ItemType.WroughtIronShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronBreastPlate,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.WroughtIronGreaves,
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
                skill: 85,
                items: [
                    {
                        itemType: IItem_1.ItemType.IronShield,
                        equipType: IHuman_1.EquipType.LeftHand,
                    }, {
                        itemType: IItem_1.ItemType.IronSword,
                        equipType: IHuman_1.EquipType.RightHand,
                    }, {
                        itemType: IItem_1.ItemType.IronBreastplate,
                        equipType: IHuman_1.EquipType.Chest,
                    }, {
                        itemType: IItem_1.ItemType.IronGreaves,
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
                        itemType: IItem_1.ItemType.LeatherBelt,
                        equipType: IHuman_1.EquipType.Belt,
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
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUJhbGFuY2luZ1Rvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0lCYWxhbmNpbmdUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHYSxRQUFBLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDO0lBRXBELElBQVkseUJBTVg7SUFORCxXQUFZLHlCQUF5QjtRQUNwQyxtRkFBUyxDQUFBO1FBQ1QsK0ZBQWUsQ0FBQTtRQUNmLDJGQUFhLENBQUE7UUFDYixtR0FBaUIsQ0FBQTtRQUNqQixxRkFBVSxDQUFBO0lBQ1gsQ0FBQyxFQU5XLHlCQUF5QixHQUF6QixpQ0FBeUIsS0FBekIsaUNBQXlCLFFBTXBDO0lBT0QsSUFBWSxVQU1YO0lBTkQsV0FBWSxVQUFVO1FBQ3JCLDJDQUFJLENBQUE7UUFDSixpREFBTyxDQUFBO1FBQ1AsK0NBQU0sQ0FBQTtRQUNOLHlEQUFXLENBQUE7UUFDWCwyQ0FBSSxDQUFBO0lBQ0wsQ0FBQyxFQU5XLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBTXJCO0lBWVksUUFBQSxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQTBCO1FBQzVELENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFO29CQUNOO3dCQUNDLFFBQVEsRUFBRSxnQkFBUSxDQUFDLFVBQVU7d0JBQzdCLFNBQVMsRUFBRSxrQkFBUyxDQUFDLFFBQVE7cUJBQzdCLEVBQUU7d0JBQ0YsUUFBUSxFQUFFLGdCQUFRLENBQUMsV0FBVzt3QkFDOUIsU0FBUyxFQUFFLGtCQUFTLENBQUMsU0FBUztxQkFDOUIsRUFBRTt3QkFDRixRQUFRLEVBQUUsZ0JBQVEsQ0FBQyxTQUFTO3dCQUM1QixTQUFTLEVBQUUsa0JBQVMsQ0FBQyxLQUFLO3FCQUMxQixFQUFFO3dCQUNGLFFBQVEsRUFBRSxnQkFBUSxDQUFDLFlBQVk7d0JBQy9CLFNBQVMsRUFBRSxrQkFBUyxDQUFDLElBQUk7cUJBQ3pC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