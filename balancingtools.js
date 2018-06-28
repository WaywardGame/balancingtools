var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "mod/IHookHost", "mod/Mod", "utilities/enum/Enums", "utilities/Log"], function (require, exports, Enums_1, IHookHost_1, Mod_1, Enums_2, Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BalancingTools extends Mod_1.default {
        onLoad(saveData) {
            this.debugTools = modManager.getLoadedModByName("Debug Tools");
            if (this.debugTools) {
                Log_1.default.info(Log_1.LogSource.Mod, "Found debug tools mod from balancing tools.");
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
        onGameScreenVisible() {
            if (this.debugTools) {
                setTimeout(() => {
                    this.container = $("<div></div>");
                    this.container.append($('<input id="difficulty" type="number" value="0" min="0" max="5" />'));
                    this.container.append($("<button>Set Difficulty</button>").click(() => {
                        const difficulty = parseInt($("body").find("#difficulty").val(), 10);
                        const items = itemManager.getItemsInContainer(localPlayer.inventory);
                        for (let i = items.length - 1; i >= 0; i--) {
                            itemManager.remove(items[i]);
                        }
                        ui.getBody().find("button:contains('Refresh Stats')").first().trigger("click");
                        const skillList = [Enums_1.SkillType.Tactics, Enums_1.SkillType.Parrying, Enums_1.SkillType.Marksmanship, Enums_1.SkillType.Throwing];
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
                                ];
                                skillAmount = 50;
                                break;
                            case 4:
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
                            case 5:
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
                            localPlayer.skillGain(skillList[i], 0, true);
                        }
                        game.passTurn(localPlayer);
                    }));
                    this.container.append($("<button>Spawn Creature Line</button>").click(() => {
                        for (const creatureType of Enums_2.default.values(Enums_1.CreatureType)) {
                            const x = localPlayer.x + 2;
                            const y = localPlayer.y + creatureType;
                            game.changeTile(Enums_1.TerrainType.Dirt, x, y, localPlayer.z, false);
                            game.changeTile(Enums_1.TerrainType.Dirt, x + 1, y, localPlayer.z, false);
                            creatureManager.spawn(creatureType, x, y, localPlayer.z, true);
                            creatureManager.spawn(creatureType, x + 1, y, localPlayer.z, true, true);
                        }
                        game.passTurn(localPlayer);
                    }));
                    this.getDialog("Debug Tools").find(".inner").append(this.container);
                }, 100);
            }
        }
    }
    __decorate([
        IHookHost_1.HookMethod
    ], BalancingTools.prototype, "canCreatureMove", null);
    __decorate([
        IHookHost_1.HookMethod
    ], BalancingTools.prototype, "onGameScreenVisible", null);
    exports.default = BalancingTools;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jaW5nVG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYWxhbmNpbmdUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFjQSxvQkFBb0MsU0FBUSxhQUFHO1FBSXZDLE1BQU0sQ0FBQyxRQUFhO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9ELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsYUFBRyxDQUFDLElBQUksQ0FBQyxlQUFTLENBQUMsR0FBRyxFQUFFLDZDQUE2QyxDQUFDLENBQUM7YUFDdkU7UUFDRixDQUFDO1FBRU0sUUFBUTtZQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN4QjtRQUNGLENBQUM7UUFPTSxlQUFlLENBQUMsUUFBbUIsRUFBRSxJQUFXLEVBQUUsUUFBa0I7WUFDMUUsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBR00sbUJBQW1CO1lBRXpCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFHcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFFbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsQ0FBQztvQkFFOUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTt3QkFFckUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBR3JF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