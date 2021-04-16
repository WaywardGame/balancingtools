define(["require", "exports", "game/entity/action/Action", "game/entity/action/IAction", "game/entity/IEntity", "game/entity/IHuman", "game/entity/IStats", "../IBalancingTools", "./IAction"], function (require, exports, Action_1, IAction_1, IEntity_1, IHuman_1, IStats_1, IBalancingTools_1, IAction_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Action_1.Action(IAction_1.ActionArgument.Number)
        .setUsableBy(IEntity_1.EntityType.Player)
        .setUsableWhen(...IAction_2.defaultUsability)
        .setHandler((action, difficulty) => {
        var _a, _b;
        const executor = action.executor;
        itemManager.removeContainerItems(executor.inventory);
        const health = executor.stat.get(IStats_1.Stat.Health);
        const stamina = executor.stat.get(IStats_1.Stat.Stamina);
        const hunger = executor.stat.get(IStats_1.Stat.Hunger);
        const thirst = executor.stat.get(IStats_1.Stat.Thirst);
        executor.stat.set(health, (_b = (_a = executor.asPlayer) === null || _a === void 0 ? void 0 : _a.getMaxHealth()) !== null && _b !== void 0 ? _b : health.max);
        if (stamina)
            executor.stat.set(stamina, stamina.max);
        if (hunger)
            executor.stat.set(hunger, hunger.max);
        if (thirst)
            executor.stat.set(thirst, thirst.max);
        executor.setStatus(IEntity_1.StatusType.Bleeding, false, IEntity_1.StatusEffectChangeReason.Passed);
        executor.setStatus(IEntity_1.StatusType.Burned, false, IEntity_1.StatusEffectChangeReason.Passed);
        executor.setStatus(IEntity_1.StatusType.Poisoned, false, IEntity_1.StatusEffectChangeReason.Passed);
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
            executor.skill.setCore(skillList[i], skill);
        }
        action.setPassTurn();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0RGlmZmljdWx0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb24vU2V0RGlmZmljdWx0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFRQSxrQkFBZSxJQUFJLGVBQU0sQ0FBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQztTQUM5QyxXQUFXLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUM7U0FDOUIsYUFBYSxDQUFDLEdBQUcsMEJBQWdCLENBQUM7U0FDbEMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQXNCLEVBQUUsRUFBRTs7UUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUdqQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3JELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGFBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxhQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsYUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGFBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBQSxNQUFBLFFBQVEsQ0FBQyxRQUFRLDBDQUFFLFlBQVksRUFBRSxtQ0FBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsSUFBSSxPQUFPO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLE1BQU07WUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTTtZQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsa0NBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsa0NBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsa0NBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHaEYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxrQkFBUyxDQUFDLE9BQU8sRUFBRSxrQkFBUyxDQUFDLFFBQVEsRUFBRSxrQkFBUyxDQUFDLFlBQVksRUFBRSxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRHLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsOEJBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFFLENBQUM7UUFFdkQsSUFBSSxLQUFLLEVBQUU7WUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7b0JBQ3hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2hEO2FBQ0Q7U0FDRDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1QztRQUVELE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyJ9