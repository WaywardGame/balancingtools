define(["require", "exports"], function (require, exports) {
    "use strict";
    class Mod extends Mods.Mod {
        onInitialize(saveDataGlobal) {
        }
        onLoad(saveData) {
            const developerTools = Mods.getLoadedModByName("Developer Tools");
            if (developerTools) {
                Utilities.Console.log(Source.Mod, `Found developer tools mod from balancing tools`, developerTools);
                const modObject = developerTools.object;
                if (modObject) {
                    const ret = modObject.testFunction();
                    Utilities.Console.log(Source.Mod, `Balancing tools got ${ret} from developer tools`);
                }
            }
        }
        onSave() {
        }
        onUnload() {
            if (this.container) {
                this.container.remove();
            }
        }
        canCreatureMove(creatureId, creature, tile) {
            return false;
        }
        onShowInGameScreen() {
            setTimeout(() => {
                this.container = $("<div></div>");
                this.container.append($('<input id="difficulty" type="number" value="0" min="0" max="4" />'));
                this.container.append($("<button>Set Difficulty</button>").click(() => {
                    let difficulty = parseInt($("body").find("#difficulty").val(), 10);
                    let items = Item.getItemsInContainer(player.inventory);
                    for (let i = items.length - 1; i >= 0; i--) {
                        Item.remove(items[i]);
                    }
                    ui.getBody().find("button:contains('Refresh Stats')").first().trigger("click");
                    let skillList = [SkillType.Tactics, SkillType.Parrying, SkillType.Archery, SkillType.Throwing];
                    let skillAmount = 0;
                    let list;
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
                        for (let i = 0; i < list.length; i++) {
                            let spawnInfo = list[i];
                            let item = Item.create(spawnInfo.itemType);
                            if (spawnInfo.equipType) {
                                ui.setEquipSlot(spawnInfo.equipType, item.id);
                            }
                        }
                    }
                    for (let i = 0; i < skillList.length; i++) {
                        player.skills[skillList[i]].percent = skillAmount;
                        player.skills[skillList[i]].core = skillAmount;
                    }
                    game.passTurn();
                }));
                this.container.append($("<button>Spawn Creature Line</button>").click(() => {
                    for (let i = 0; i < Creature.defines.length; i++) {
                        if (Creature.defines[i]) {
                            let x = player.x + 2;
                            let y = player.y + i;
                            game.changeTile(TerrainType.Dirt, x, y, player.z, false);
                            game.changeTile(TerrainType.Dirt, x + 1, y, player.z, false);
                            Creature.spawn(i, x, y, player.z, true);
                            Creature.spawn(i, x + 1, y, player.z, true, true);
                        }
                    }
                    game.passTurn();
                }));
                this.getDialog("Developer Tools").find(".inner").append(this.container);
            }, 100);
        }
        onGameEnd(playerState) {
            this.removeOptionsSection(this.getName());
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mod;
});
//# sourceMappingURL=balancingtools.js.map