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
define(["require", "exports", "@wayward/game/game/entity/action/Action", "@wayward/game/game/entity/action/IAction", "@wayward/game/game/entity/IEntity", "../IBalancingTools", "./IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IBalancingTools_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Integer32, IAction_1.ActionArgument.Integer32)
        .setUsableBy(IEntity_1.EntityType.Human)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, equipment, quality) => {
        const executor = action.executor;
        const { items } = IBalancingTools_1.equipmentSets.get(equipment);
        if (items) {
            for (let i = 0; i < items.length; i++) {
                const spawnInfo = items[i];
                const item = executor.createItemInInventory(spawnInfo.itemType, quality);
                if (spawnInfo.equipType) {
                    executor.equip(item, spawnInfo.equipType, true);
                }
            }
        }
        action.setPassTurn();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RXF1aXBtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi9TZXRFcXVpcG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7O0lBU0gsa0JBQWUsSUFBSSxlQUFNLENBQUMsd0JBQWMsQ0FBQyxTQUFTLEVBQUUsd0JBQWMsQ0FBQyxTQUFTLENBQUM7U0FDM0UsV0FBVyxDQUFDLG9CQUFVLENBQUMsS0FBSyxDQUFDO1NBQzdCLGFBQWEsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO1NBQ2xDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUF1QixFQUFFLE9BQWdCLEVBQUUsRUFBRTtRQUNqRSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRWpDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRywrQkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUVoRCxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDekUsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3pCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQztRQUVELE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyJ9