define(["require", "exports", "Enums"], function (require, exports, Enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BalancingToolsTranslation;
    (function (BalancingToolsTranslation) {
        BalancingToolsTranslation[BalancingToolsTranslation["PanelName"] = 0] = "PanelName";
        BalancingToolsTranslation[BalancingToolsTranslation["FreezeCreatures"] = 1] = "FreezeCreatures";
        BalancingToolsTranslation[BalancingToolsTranslation["SetDifficulty"] = 2] = "SetDifficulty";
        BalancingToolsTranslation[BalancingToolsTranslation["SpawnCreatureLine"] = 3] = "SpawnCreatureLine";
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
                        itemType: Enums_1.ItemType.BarkShield,
                        equipType: Enums_1.EquipType.LeftHand
                    }, {
                        itemType: Enums_1.ItemType.WoodenSpear,
                        equipType: Enums_1.EquipType.RightHand
                    }, {
                        itemType: Enums_1.ItemType.BarkTunic,
                        equipType: Enums_1.EquipType.Chest
                    }, {
                        itemType: Enums_1.ItemType.BarkLeggings,
                        equipType: Enums_1.EquipType.Legs
                    }, {
                        itemType: Enums_1.ItemType.Skullcap,
                        equipType: Enums_1.EquipType.Head
                    }, {
                        itemType: Enums_1.ItemType.Bow
                    }, {
                        itemType: Enums_1.ItemType.WoodenArrow
                    }, {
                        itemType: Enums_1.ItemType.WoodenArrow
                    }, {
                        itemType: Enums_1.ItemType.WoodenArrow
                    }, {
                        itemType: Enums_1.ItemType.CordedSling
                    }, {
                        itemType: Enums_1.ItemType.StoneBullet
                    }, {
                        itemType: Enums_1.ItemType.StoneBullet
                    }, {
                        itemType: Enums_1.ItemType.StoneBullet
                    }
                ]
            }],
        [Difficulty.Leather, {
                skill: 35,
                items: [
                    {
                        itemType: Enums_1.ItemType.BarkShield,
                        equipType: Enums_1.EquipType.LeftHand
                    }, {
                        itemType: Enums_1.ItemType.StoneAxe,
                        equipType: Enums_1.EquipType.RightHand
                    }, {
                        itemType: Enums_1.ItemType.LeatherTunic,
                        equipType: Enums_1.EquipType.Chest
                    }, {
                        itemType: Enums_1.ItemType.LeatherPants,
                        equipType: Enums_1.EquipType.Legs
                    }, {
                        itemType: Enums_1.ItemType.LeatherCap,
                        equipType: Enums_1.EquipType.Head
                    }, {
                        itemType: Enums_1.ItemType.LeatherBoots,
                        equipType: Enums_1.EquipType.Feet
                    }, {
                        itemType: Enums_1.ItemType.LeatherGorget,
                        equipType: Enums_1.EquipType.Neck
                    }, {
                        itemType: Enums_1.ItemType.LeatherGloves,
                        equipType: Enums_1.EquipType.Hands
                    }, {
                        itemType: Enums_1.ItemType.LeatherBelt,
                        equipType: Enums_1.EquipType.Belt
                    }, {
                        itemType: Enums_1.ItemType.ShortBow
                    }, {
                        itemType: Enums_1.ItemType.StoneArrow
                    }, {
                        itemType: Enums_1.ItemType.StoneArrow
                    }, {
                        itemType: Enums_1.ItemType.StoneArrow
                    }, {
                        itemType: Enums_1.ItemType.LeatherSling
                    }, {
                        itemType: Enums_1.ItemType.StoneBullet
                    }, {
                        itemType: Enums_1.ItemType.StoneBullet
                    }, {
                        itemType: Enums_1.ItemType.StoneBullet
                    }
                ]
            }],
        [Difficulty.Copper, {
                skill: 50,
                items: [
                    {
                        itemType: Enums_1.ItemType.CopperShield,
                        equipType: Enums_1.EquipType.LeftHand
                    }, {
                        itemType: Enums_1.ItemType.CopperSword,
                        equipType: Enums_1.EquipType.RightHand
                    }, {
                        itemType: Enums_1.ItemType.CopperBreastPlate,
                        equipType: Enums_1.EquipType.Chest
                    }, {
                        itemType: Enums_1.ItemType.CopperGreaves,
                        equipType: Enums_1.EquipType.Legs
                    }, {
                        itemType: Enums_1.ItemType.CopperHelmet,
                        equipType: Enums_1.EquipType.Head
                    }, {
                        itemType: Enums_1.ItemType.CopperBoots,
                        equipType: Enums_1.EquipType.Feet
                    }, {
                        itemType: Enums_1.ItemType.CopperGorget,
                        equipType: Enums_1.EquipType.Neck
                    }, {
                        itemType: Enums_1.ItemType.CopperGauntlets,
                        equipType: Enums_1.EquipType.Hands
                    }, {
                        itemType: Enums_1.ItemType.LeatherBelt,
                        equipType: Enums_1.EquipType.Belt
                    }, {
                        itemType: Enums_1.ItemType.LongBow
                    }, {
                        itemType: Enums_1.ItemType.CopperArrow
                    }, {
                        itemType: Enums_1.ItemType.CopperArrow
                    }, {
                        itemType: Enums_1.ItemType.CopperArrow
                    }, {
                        itemType: Enums_1.ItemType.LeatherSling
                    }, {
                        itemType: Enums_1.ItemType.CopperBullet
                    }, {
                        itemType: Enums_1.ItemType.CopperBullet
                    }, {
                        itemType: Enums_1.ItemType.CopperBullet
                    }
                ]
            }],
        [Difficulty.WroughtIron, {
                skill: 60,
                items: [
                    {
                        itemType: Enums_1.ItemType.WroughtIronShield,
                        equipType: Enums_1.EquipType.LeftHand
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronSword,
                        equipType: Enums_1.EquipType.RightHand
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronBreastPlate,
                        equipType: Enums_1.EquipType.Chest
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronGreaves,
                        equipType: Enums_1.EquipType.Legs
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronHelmet,
                        equipType: Enums_1.EquipType.Head
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronBoots,
                        equipType: Enums_1.EquipType.Feet
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronGorget,
                        equipType: Enums_1.EquipType.Neck
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronGauntlets,
                        equipType: Enums_1.EquipType.Hands
                    }, {
                        itemType: Enums_1.ItemType.LeatherBelt,
                        equipType: Enums_1.EquipType.Belt
                    }, {
                        itemType: Enums_1.ItemType.LongBow
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronArrow
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronArrow
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronArrow
                    }, {
                        itemType: Enums_1.ItemType.LeatherSling
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronBullet
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronBullet
                    }, {
                        itemType: Enums_1.ItemType.WroughtIronBullet
                    }
                ]
            }],
        [Difficulty.Iron, {
                skill: 85,
                items: [
                    {
                        itemType: Enums_1.ItemType.IronShield,
                        equipType: Enums_1.EquipType.LeftHand
                    }, {
                        itemType: Enums_1.ItemType.IronSword,
                        equipType: Enums_1.EquipType.RightHand
                    }, {
                        itemType: Enums_1.ItemType.IronBreastplate,
                        equipType: Enums_1.EquipType.Chest
                    }, {
                        itemType: Enums_1.ItemType.IronGreaves,
                        equipType: Enums_1.EquipType.Legs
                    }, {
                        itemType: Enums_1.ItemType.IronHelmet,
                        equipType: Enums_1.EquipType.Head
                    }, {
                        itemType: Enums_1.ItemType.IronBoots,
                        equipType: Enums_1.EquipType.Feet
                    }, {
                        itemType: Enums_1.ItemType.IronGorget,
                        equipType: Enums_1.EquipType.Neck
                    }, {
                        itemType: Enums_1.ItemType.IronGauntlets,
                        equipType: Enums_1.EquipType.Hands
                    }, {
                        itemType: Enums_1.ItemType.LeatherBelt,
                        equipType: Enums_1.EquipType.Belt
                    }, {
                        itemType: Enums_1.ItemType.CompositeBow
                    }, {
                        itemType: Enums_1.ItemType.IronArrow
                    }, {
                        itemType: Enums_1.ItemType.IronArrow
                    }, {
                        itemType: Enums_1.ItemType.IronArrow
                    }, {
                        itemType: Enums_1.ItemType.LeatherSling
                    }, {
                        itemType: Enums_1.ItemType.IronBullet
                    }, {
                        itemType: Enums_1.ItemType.IronBullet
                    }, {
                        itemType: Enums_1.ItemType.IronBullet
                    }
                ]
            }]
    ]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUJhbGFuY2luZ1Rvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0lCYWxhbmNpbmdUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFZLHlCQUtYO0lBTEQsV0FBWSx5QkFBeUI7UUFDcEMsbUZBQVMsQ0FBQTtRQUNULCtGQUFlLENBQUE7UUFDZiwyRkFBYSxDQUFBO1FBQ2IsbUdBQWlCLENBQUE7SUFDbEIsQ0FBQyxFQUxXLHlCQUF5QixHQUF6QixpQ0FBeUIsS0FBekIsaUNBQXlCLFFBS3BDO0lBTUQsSUFBWSxVQU1YO0lBTkQsV0FBWSxVQUFVO1FBQ3JCLDJDQUFJLENBQUE7UUFDSixpREFBTyxDQUFBO1FBQ1AsK0NBQU0sQ0FBQTtRQUNOLHlEQUFXLENBQUE7UUFDWCwyQ0FBSSxDQUFBO0lBQ0wsQ0FBQyxFQU5XLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBTXJCO0lBWVksUUFBQSxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQTBCO1FBQzVELENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFO29CQUNOO3dCQUNDLFFBQVEsRUFBRSxnQkFBUSxDQUFDLFVBQVU7d0JBQzdCLFNBQVMsRUFBRSxpQkFBUyxDQUFDLFFBQVE7cUJBQzdCLEVBQUU7d0JBQ0YsUUFBUSxFQUFFLGdCQUFRLENBQUMsV0FBVzt3QkFDOUIsU0FBUyxFQUFFLGlCQUFTLENBQUMsU0FBUztxQkFDOUIsRUFBRTt3QkFDRixRQUFRLEVBQUUsZ0JBQVEsQ0FBQyxTQUFTO3dCQUM1QixTQUFTLEVBQUUsaUJBQVMsQ0FBQyxLQUFLO3FCQUMxQixFQUFFO3dCQUNGLFFBQVEsRUFBRSxnQkFBUSxDQUFDLFlBQVk7d0JBQy9CLFNBQVMsRUFBRSxpQkFBUyxDQUFDLElBQUk7cUJBQ3pCLEVBQUU7d0JBQ0YsUUFBUSxFQUFFLGdCQUFRLENBQUMsUUFBUTt3QkFDM0IsU0FBUyxF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