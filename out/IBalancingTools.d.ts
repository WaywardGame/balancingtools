import { EquipType } from "game/entity/IHuman";
import { ItemType } from "game/item/IItem";
export declare const BALANCING_TOOLS_ID = "Balancing Tools";
export declare enum BalancingToolsTranslation {
    PanelName = 0,
    FreezeCreatures = 1,
    EquipmentQuality = 2,
    SetEquipment = 3,
    SetSkills = 4,
    SpawnCreatureLine = 5,
    FreezeNPCs = 6,
    DisableAttackCreatures = 7,
    DisableAttackNPCs = 8
}
export interface ISaveData {
    freezeCreatures?: boolean;
    freezeNPCs?: boolean;
    disableAttackCreatures?: boolean;
    disableAttackNPCs?: boolean;
}
export declare enum EquipmentSet {
    Bark = 0,
    Leather = 1,
    Tin = 2,
    Scale = 3,
    Copper = 4,
    ArmoredScale = 5,
    WroughtIron = 6,
    Iron = 7,
    Bronze = 8,
    Blackplate = 9
}
export interface IItemSpawnInfo {
    itemType: ItemType;
    equipType?: EquipType;
}
export interface IEquipmentSet {
    items: IItemSpawnInfo[];
}
export declare const equipmentSets: Map<EquipmentSet, IEquipmentSet>;
