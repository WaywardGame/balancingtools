var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mod = (function (_super) {
    __extends(Mod, _super);
    function Mod() {
        _super.apply(this, arguments);
    }
    Mod.prototype.onInitialize = function (saveDataGlobal) {
    };
    Mod.prototype.onLoad = function (saveData) {
    };
    Mod.prototype.onSave = function () {
    };
    Mod.prototype.onUnload = function () {
        if (this.container) {
            this.container.remove();
        }
    };
    Mod.prototype.onShowInGameScreen = function () {
        var _this = this;
        setTimeout(function () {
            _this.container = $("<div></div>");
            _this.container.append($('<input id="difficulty" type="number" value="0" min="0" max="4" />'));
            _this.container.append($("<button>Set Difficulty</button>").click(function () {
                var difficulty = parseInt($("body").find("#difficulty").val(), 10);
                var items = Item.getItemsInContainer(player.inventory);
                for (var i = items.length - 1; i >= 0; i--) {
                    Item.remove(items[i]);
                }
                ui.getBody().find("button:contains('Refresh Stats')").first().trigger("click");
                var skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Archery, SkillType.Throwing];
                var skillAmount = 0;
                var list;
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
                                itemType: ItemType.Arrow
                            }, {
                                itemType: ItemType.Arrow
                            }, {
                                itemType: ItemType.Arrow
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
                    for (var i = 0; i < list.length; i++) {
                        var spawnInfo = list[i];
                        var item = Item.create(spawnInfo.itemType);
                        if (spawnInfo.equipType) {
                            ui.setEquipSlot(spawnInfo.equipType, item.id);
                        }
                    }
                }
                for (var i = 0; i < skillList.length; i++) {
                    player.skills[skillList[i]].percent = skillAmount;
                    player.skills[skillList[i]].core = skillAmount;
                }
                game.passTurn();
            }));
            _this.container.append($("<button>Spawn Monster Line</button>").click(function () {
                for (var i = 0; i < monsters.length; i++) {
                    if (monsters[i]) {
                        var x = player.x + 2;
                        var y = player.y + i;
                        game.changeTile(TerrainType.Dirt, x, y, player.z, false);
                        game.changeTile(TerrainType.Dirt, x + 1, y, player.z, false);
                        game.spawnMonster(i, x, y, player.z, true);
                        game.spawnMonster(i, x + 1, y, player.z, true, true);
                    }
                }
                game.passTurn();
            }));
            _this.getDialog("Developer Tools").find(".inner").append(_this.container);
        }, 100);
    };
    Mod.prototype.onGameEnd = function (playerState) {
        this.removeOptionsSection(this.getName());
    };
    return Mod;
}(Mods.Mod));
//# sourceMappingURL=balancingtools.js.map