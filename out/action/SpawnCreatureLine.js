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
define(["require", "exports", "@wayward/game/game/entity/action/Action", "@wayward/game/game/entity/creature/ICreature", "@wayward/game/game/entity/IEntity", "@wayward/game/game/tile/ITerrain", "@wayward/game/utilities/enum/Enums", "@wayward/game/game/entity/creature/Creatures", "@wayward/game/game/doodad/IDoodad"], function (require, exports, Action_1, ICreature_1, IEntity_1, ITerrain_1, Enums_1, Creatures_1, IDoodad_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action()
        .setUsableBy(IEntity_1.EntityType.Human)
        .setHandler(action => {
        const executor = action.executor;
        const biomeType = executor.island.biomeType;
        const creatureTypes = Array.from(Enums_1.default.values(ICreature_1.CreatureType))
            .sort((creatureA, creatureB) => {
            const creatureASort = Creatures_1.creatureDescriptions[creatureA]?.spawn?.[biomeType]?.spawnsOnAlignment ??
                (Creatures_1.creatureDescriptions[creatureA]?.spawnGroup?.[biomeType] ? -99998 : -99999);
            const creatureBSort = Creatures_1.creatureDescriptions[creatureB]?.spawn?.[biomeType]?.spawnsOnAlignment ??
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
            if (Creatures_1.creatureDescriptions[creatureType]?.spawn?.[biomeType]?.spawnsOnAlignment === undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bhd25DcmVhdHVyZUxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uL1NwYXduQ3JlYXR1cmVMaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRzs7OztJQVVILGtCQUFlLElBQUksZUFBTSxFQUFFO1NBQ3pCLFdBQVcsQ0FBQyxvQkFBVSxDQUFDLEtBQUssQ0FBQztTQUM3QixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVqQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUs1QyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsd0JBQVksQ0FBQyxDQUFDO2FBQzFELElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUM5QixNQUFNLGFBQWEsR0FBRyxnQ0FBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBaUI7Z0JBQzNGLENBQUMsZ0NBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlFLE1BQU0sYUFBYSxHQUFHLGdDQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGlCQUFpQjtnQkFDM0YsQ0FBQyxnQ0FBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUUsT0FBTyxhQUFhLEdB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