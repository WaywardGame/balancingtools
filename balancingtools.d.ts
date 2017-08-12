import { ICreature } from "creature/ICreature";
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
}
