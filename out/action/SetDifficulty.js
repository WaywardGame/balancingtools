define(["require", "exports", "entity/action/Action", "entity/action/IAction", "entity/IEntity", "entity/IHuman", "../IBalancingTools", "./IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IHuman_1, IBalancingTools_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Number)
        .setUsableBy(IEntity_1.EntityType.Player)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, difficulty) => {
        const executor = action.executor;
        itemManager.removeContainerItems(executor.inventory);
        action.get(IAction_2.default.DEBUG_TOOLS.actionHeal).execute(localPlayer, executor);
        const skillList = [IHuman_1.SkillType.Tactics, IHuman_1.SkillType.Parrying, IHuman_1.SkillType.Marksmanship, IHuman_1.SkillType.Throwing];
        const { items, skill } = IBalancingTools_1.difficulties.get(difficulty);
        if (items) {
            for (let i = 0; i < items.length; i++) {
                const spawnInfo = items[i];
                const item = executor.createItemInInventory(spawnInfo.itemType);
                if (spawnInfo.equipType) {
                    executor.equip(item, spawnInfo.equipType, true);
                }
            }
        }
        for (let i = 0; i < skillList.length; i++) {
            executor.setSkillCore(skillList[i], skill);
        }
        action.setPassTurn();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RGlmZmljdWx0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vU2V0RGlmZmljdWx0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFVQSxrQkFBZSxJQUFJLGVBQU0sQ0FBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQztTQUM5QyxXQUFXLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUM7U0FDOUIsYUFBYSxDQUFDLEdBQUcsMEJBQWdCLENBQUM7U0FDbEMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQXNCLEVBQUUsRUFBRTtRQUM5QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBR2pDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFJcEQsTUFBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBR25GLE1BQU0sU0FBUyxHQUFHLENBQUMsa0JBQVMsQ0FBQyxPQUFPLEVBQUUsa0JBQVMsQ0FBQyxRQUFRLEVBQUUsa0JBQVMsQ0FBQyxZQUFZLEVBQUUsa0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLDhCQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBRSxDQUFDO1FBRXZELElBQUksS0FBSyxFQUFFO1lBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO29CQUN4QixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoRDthQUNEO1NBQ0Q7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQztRQUVELE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyJ9