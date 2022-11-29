import { Mammifere } from "../Abstracts/Mammifère";
import { Aquatique } from "../Interfaces/Milieux/Aquatique";

class Dauphin extends Mammifere implements Aquatique {

    constructor(nom:string, poids:number, dateNaissance:Date){
        super(nom, poids, dateNaissance)
    }

    afficher():void {
        console.log(`Cet animal est un Dauphin que l'on nomme ${this._nom}. Il est né le ${this._dateNaissance.toLocaleDateString()} et pèse ${this._poids}kg`);
    }

    respirerSousLeau(): void {
        throw new Error("Method not implemented.");
    }

    nager(): void {
        throw new Error("Method not implemented.");
    }
    
}

export default Dauphin;