/// <reference path="mod-reference/modreference.d.ts" />
export default class Mod extends Mods.Mod {
    private container;
    onInitialize(saveDataGlobal: any): any;
    onLoad(saveData: any): void;
    onSave(): any;
    onUnload(): void;
    canCreatureMove(creatureId: number, creature: Creature.ICreature, tile?: Terrain.ITile): boolean;
    onShowInGameScreen(): void;
    onGameEnd(playerState: PlayerState): void;
}
