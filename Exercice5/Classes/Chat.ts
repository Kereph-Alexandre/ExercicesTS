import { Mammifere } from "../Abstracts/Mammifère";
import { Terrestre } from "../Interfaces/Milieux/Terrestre";

class Chat extends Mammifere implements Terrestre{

    constructor(nom:string, poids:number, dateNaissance:Date){
        super(nom, poids, dateNaissance);
    }

    afficher():void{
        console.log(`Cet animal est un Chat qui s'appelle ${this._nom}. Il est né le ${this._dateNaissance.toLocaleDateString()} et pèse ${this._poids}kg`);
    }

    respirerHorsDeLeau(): void {
        throw new Error("Method not implemented.");
    }
    marcher(): void {
        throw new Error("Method not implemented.");
    }
    miauler():void{

    }
}

export default Chat;