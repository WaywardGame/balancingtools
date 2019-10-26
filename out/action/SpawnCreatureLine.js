define(["require", "exports", "entity/action/Action", "entity/creature/ICreature", "entity/IEntity", "tile/ITerrain", "utilities/enum/Enums"], function (require, exports, Action_1, ICreature_1, IEntity_1, ITerrain_1, Enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action()
        .setUsableBy(IEntity_1.EntityType.Player)
        .setHandler(action => {
        const executor = action.executor;
        for (const creatureType of Enums_1.default.values(ICreature_1.CreatureType)) {
            const x = executor.x + 2;
            const y = executor.y + creatureType;
            game.changeTile(ITerrain_1.TerrainType.Dirt, x, y, executor.z, false);
            game.changeTile(ITerrain_1.TerrainType.Dirt, x + 1, y, executor.z, false);
            creatureManager.spawn(creatureType, x, y, executor.z, true);
            creatureManager.spawn(creatureType, x + 1, y, executor.z, true, true);
        }
        renderer.computeSpritesInViewport();
        action.setUpdateRender();
        action.setUpdateView();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bhd25DcmVhdHVyZUxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uL1NwYXduQ3JlYXR1cmVMaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BLGtCQUFlLElBQUksZUFBTSxFQUFFO1NBQ3pCLFdBQVcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQztTQUM5QixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUdqQyxLQUFLLE1BQU0sWUFBWSxJQUFJLGVBQUssQ0FBQyxNQUFNLENBQUMsd0JBQVksQ0FBQyxFQUFFO1lBQ3RELE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBRXBDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUUvRCxlQUFlLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUQsZUFBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEU7UUFFRCxRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDIn0=