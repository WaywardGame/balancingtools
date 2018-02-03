import { ICreature } from "creature/ICreature";
import { MoveType } from "Enums";
import Mod from "mod/Mod";
import { ITile } from "tile/ITerrain";
export default class BalancingTools extends Mod {
    private container;
    private debugTools;
    onLoad(saveData: any): void;
    onUnload(): void;
    canCreatureMove(creature: ICreature, tile: ITile, moveType: MoveType): boolean;
    onShowInGameScreen(): void;
}
