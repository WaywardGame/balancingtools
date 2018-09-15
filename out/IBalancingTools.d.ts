import { EquipType, ItemType } from "Enums";
export declare enum BalancingToolsTranslation {
    PanelName = 0,
    FreezeCreatures = 1,
    Difficulty = 2,
    SpawnCreatureLine = 3
}
export declare enum Difficulty {
    Bark = 0,
    Leather = 1,
    Copper = 2,
    WroughtIron = 3,
    Iron = 4
}
export interface IItemSpawnInfo {
    itemType: ItemType;
    equipType?: EquipType;
}
export interface IDifficulty {
    items: IItemSpawnInfo[];
    skill: number;
}
export declare const difficulties: Map<Difficulty, IDifficulty>;
