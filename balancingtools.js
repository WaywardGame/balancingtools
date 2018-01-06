define(["require", "exports", "Enums", "mod/Mod", "Utilities"], function (require, exports, Enums_1, Mod_1, Utilities) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BalancingTools extends Mod_1.default {
        onLoad(saveData) {
            this.developerTools = modManager.getLoadedModByName("Developer Tools");
            if (this.developerTools) {
                Utilities.Console.log(Enums_1.Source.Mod, "Found developer tools mod from balancing tools.", this.developerTools);
            }
        }
        onUnload() {
            if (this.container) {
                this.container.remove();
            }
        }
        canCreatureMove(creature, tile, moveType) {
            return false;
        }
        onShowInGameScreen() {
            if (this.developerTools) {
                setTimeout(() => {
                    this.container = $("<div></div>");
                    this.container.append($('<input id="difficulty" type="number" value="0" min="0" max="4" />'));
                    this.container.append($("<button>Set Difficulty</button>").click(() => {
                        const difficulty = parseInt($("body").find("#difficulty").val(), 10);
                        const items = itemManager.getItemsInContainer(localPlayer.inventory);
                        for (let i = items.length - 1; i >= 0; i--) {
                            itemManager.remove(items[i]);
                        }
                        ui.getBody().find("button:contains('Refresh Stats')").first().trigger("click");
                        const skillList = [Enums_1.SkillType.Tactics, Enums_1.SkillType.Parrying, Enums_1.SkillType.Archery, Enums_1.SkillType.Throwing];
                        let skillAmount = 0;
                        let list;
                        switch (difficulty) {
                            case 1:
                                list = [
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
                                ];
                                skillAmount = 15;
                                break;
                            case 2:
                                list = [
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
                                ];
                                skillAmount = 35;
                                break;
                            case 3:
                                list = [
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
                                ];
                                skillAmount = 60;
                                break;
                            case 4:
                                list = [
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
                        for (const creatureType of Utilities.Enums.getValues(Enums_1.CreatureType)) {
                            const x = localPlayer.x + 2;
                            const y = localPlayer.y + creatureType;
                            game.changeTile(Enums_1.TerrainType.Dirt, x, y, localPlayer.z, false);
                            game.changeTile(Enums_1.TerrainType.Dirt, x + 1, y, localPlayer.z, false);
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
    exports.default = BalancingTools;
});
//# sourceMappingURL=BalancingTools.js.map