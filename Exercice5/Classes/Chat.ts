import { Mammifere } from "../Abstracts/Mammifère";
import { Terrestre } from "../Interfaces/Milieux/Terrestre";

class Chat extends Mammifere implements Terrestre{
    nombrePatte:number = 4;
    milieu:string = 'Terre';  

    constructor(nom:string, poids:number, dateNaissance:Date){
        super(nom, poids, dateNaissance);
    }

    afficher():void{
        console.log(`Cet animal est un Chat qui s'appelle ${this._nom}. Il est né le ${this._dateNaissance.toLocaleDateString()} et pèse ${this._poids}kg`);
    }

    respirerHorsDeLeau(): void {

    }

    marcher(): void {
        console.log(`J'utilise mes ${this.nombrePatte} pattes pour me déplacer.`);;
    }
    
    miauler():void{
        console.log('miaou');
    }
}

export default Chat;