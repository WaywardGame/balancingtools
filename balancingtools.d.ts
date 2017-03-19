import { ICreature } from "creature/ICreature";
import { PlayerState } from "Enums";
import Mod from "mod/Mod";
import { ITile } from "tile/ITerrain";
export default class BalancingTools extends Mod {
    private container;
    onInitialize(saveDataGlobal: any): any;
    onLoad(saveData: any): void;
    onSave(): any;
    onUnload(): void;
    canCreatureMove(creatureId: number, creature: ICreature, tile?: ITile): boolean;
    onShowInGameScreen(): void;
    onGameEnd(playerState: PlayerState): void;
}
