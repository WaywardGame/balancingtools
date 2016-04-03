/// <reference path="mod-reference/modreference.d.ts" />
interface IItemSpawnInfo {
    itemType: ItemType;
    equipType?: EquipType;
}
declare class Mod extends Mods.Mod {
    private container;
    onInitialize(saveDataGlobal: any): any;
    onLoad(saveData: any): void;
    onSave(): any;
    onUnload(): void;
    onShowInGameScreen(): void;
    onGameEnd(playerState: PlayerState): void;
}
