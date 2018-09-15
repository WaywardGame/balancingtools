import { IActionArgument, IActionResult } from "action/IAction";
import { ICreature } from "creature/ICreature";
import { MoveType } from "Enums";
import { Dictionary } from "language/ILanguage";
import { InterModRegistration } from "mod/InterModRegistry";
import Mod from "mod/Mod";
import IPlayer from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { ModRegistrationMainDialogPanel } from "../../debugtools/out/IDebugTools";
import { Difficulty } from "./IBalancingTools";
interface ISaveData {
    freezeCreatures?: boolean;
}
export default class BalancingTools extends Mod {
    static readonly INSTANCE: BalancingTools;
    readonly balancingToolsPanel: InterModRegistration<ModRegistrationMainDialogPanel>;
    readonly dictionary: Dictionary;
    readonly dictionaryDifficulty: Dictionary;
    readonly saveData: ISaveData;
    canCreatureMove(creature: ICreature, tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    toggleCreaturesFrozen(executor: IPlayer, { object: freezeCreatures }: IActionArgument<boolean>, result: IActionResult): void;
    setDifficulty(executor: IPlayer, { object: difficulty }: IActionArgument<Difficulty>, result: IActionResult): void;
    spawnCreatureLine(executor: IPlayer, { object: freezeCreatures }: IActionArgument, result: IActionResult): void;
}
export {};
