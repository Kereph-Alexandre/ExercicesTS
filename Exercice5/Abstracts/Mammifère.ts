import { Animal } from "../Interfaces/Animal";

export abstract class Mammifere implements Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    _classe:string = 'Mammifere';

    _oxygene:number = 0;

    constructor(nom:string, poids:number, dateNaissance:Date){
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }

    public get age(){
        const jour = new Date();
        let age = jour.getFullYear() - this._dateNaissance.getFullYear();
        const mois = jour.getMonth() - this._dateNaissance.getMonth();

        if (mois < 0 || mois === 0 && jour.getDate() < this._dateNaissance.getDate()){
            age--; 
        }

        return age;
    }

    public get nom(){
        return this._nom;
    }

    /**
     * Affiche les informations définissant l'Animal
     */
    afficher(): void {
        console.log(`Je suis un mammifère`);
    }

}