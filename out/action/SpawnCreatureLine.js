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
define(["require", "exports", "game/entity/action/Action", "game/entity/creature/ICreature", "game/entity/IEntity", "game/tile/ITerrain", "utilities/enum/Enums", "game/entity/creature/Creatures", "game/doodad/IDoodad"], function (require, exports, Action_1, ICreature_1, IEntity_1, ITerrain_1, Enums_1, Creatures_1, IDoodad_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action()
        .setUsableBy(IEntity_1.EntityType.Human)
        .setHandler(action => {
        const executor = action.executor;
        const biomeType = executor.island.biomeType;
        const creatureTypes = Array.from(Enums_1.default.values(ICreature_1.CreatureType))
            .sort((creatureA, creatureB) => {
            const creatureASort = Creatures_1.creatureDescriptions[creatureA]?.spawn?.[biomeType]?.spawnsOnReputation ??
                (Creatures_1.creatureDescriptions[creatureA]?.spawnGroup?.[biomeType] ? -99998 : -99999);
            const creatureBSort = Creatures_1.creatureDescriptions[creatureB]?.spawn?.[biomeType]?.spawnsOnReputation ??
                (Creatures_1.creatureDescriptions[creatureB]?.spawnGroup?.[biomeType] ? -99998 : -99999);
            return creatureBSort - creatureASort;
        });
        let yOffset = 1;
        let addedSpawnsOnRepFence = false;
        let addedspawnGroupFence = false;
        for (const creatureType of creatureTypes) {
            const x = executor.x + 2;
            let y = executor.y + yOffset;
            let createFence = false;
            if (Creatures_1.creatureDescriptions[creatureType]?.spawn?.[biomeType]?.spawnsOnReputation === undefined) {
                if (!addedSpawnsOnRepFence) {
                    addedSpawnsOnRepFence = true;
                    createFence = true;
                }
                else if (!addedspawnGroupFence && Creatures_1.creatureDescriptions[creatureType]?.spawnGroup?.[biomeType] === undefined) {
                    addedspawnGroupFence = true;
                    createFence = true;
                }
                if (createFence) {
                    for (var i = -1; i <= 2; i++) {
                        const tile = executor.island.getTileSafe(x + i, y, executor.z);
                        if (!tile) {
                            break;
                        }
                        if (tile.doodad) {
                            executor.island.doodads.remove(tile.doodad);
                        }
                        tile.changeTile(ITerrain_1.TerrainType.Dirt, false);
                        executor.island.doodads.create(IDoodad_1.DoodadType.WoodenFence, tile);
                    }
                    y++;
                    yOffset++;
                }
            }
            for (var i = -1; i <= 2; i++) {
                const tile = executor.island.getTileSafe(x + i, y, executor.z);
                if (!tile) {
                    break;
                }
                if (tile.doodad) {
                    executor.island.doodads.remove(tile.doodad);
                }
                tile.changeTile(ITerrain_1.TerrainType.Dirt, false);
            }
            executor.island.creatures.spawn(creatureType, executor.island.getTile(x, y, executor.z), true, undefined, undefined, true);
            executor.island.creatures.spawn(creatureType, executor.island.getTile(x + 1, y, executor.z), true, true, undefined, true);
            yOffset++;
        }
        renderers.computeSpritesInViewport(action.executor);
        action.setUpdateRender();
        action.setUpdateView();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bhd25DcmVhdHVyZUxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uL1NwYXduQ3JlYXR1cmVMaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRzs7OztJQVVILGtCQUFlLElBQUksZUFBTSxFQUFFO1NBQ3pCLFdBQVcsQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQztTQUM3QixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVqQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUs1QyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsd0JBQVksQ0FBQyxDQUFDO2FBQzFELElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUM5QixNQUFNLGFBQWEsR0FBRyxnQ0FBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxrQkFBa0I7Z0JBQzVGLENBQUMsZ0NBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlFLE1BQU0sYUFBYSxHQUFHLGdDQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGtCQUFrQjtnQkFDNUYsQ0FBQyxnQ0FBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUUsT0FBTyxhQUFhLEdB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