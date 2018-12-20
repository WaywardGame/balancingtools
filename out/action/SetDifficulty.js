define(["require", "exports", "action/Action", "action/IAction", "entity/IEntity", "Enums", "../IBalancingTools", "./IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, Enums_1, IBalancingTools_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Number)
        .setUsableBy(IEntity_1.EntityType.Player)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, difficulty) => {
        const executor = action.executor;
        itemManager.removeContainerItems(executor.inventory);
        action.get(IAction_2.default.DEBUG_TOOLS.actionHeal).execute(localPlayer, executor);
        const skillList = [Enums_1.SkillType.Tactics, Enums_1.SkillType.Parrying, Enums_1.SkillType.Marksmanship, Enums_1.SkillType.Throwing];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RGlmZmljdWx0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vU2V0RGlmZmljdWx0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFRQSxrQkFBZSxJQUFJLGVBQU0sQ0FBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQztTQUM5QyxXQUFXLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUM7U0FDOUIsYUFBYSxDQUFDLEdBQUcsMEJBQWdCLENBQUM7U0FDbEMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQXNCLEVBQUUsRUFBRTtRQUM5QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBR2pDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxVQUFnQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUdoRyxNQUFNLFNBQVMsR0FBRyxDQUFDLGlCQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsWUFBWSxFQUFFLGlCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEcsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyw4QkFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUUsQ0FBQztRQUV2RCxJQUFJLEtBQUssRUFBRTtZQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hFLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtvQkFDeEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDaEQ7YUFDRDtTQUNEO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0M7UUFFRCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMifQ==