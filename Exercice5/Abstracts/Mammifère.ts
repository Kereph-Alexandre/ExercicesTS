import { Animal } from "../Interfaces/Animal";

export abstract class Mammifere implements Animal {
    _nom: string;
    _poids: number;
    _dateNaissance: Date;

    _classe:string = 'Mammifere';

    constructor(nom:string, poids:number, dateNaissance:Date){
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }

    /**
     * Affiche les informations définissant l'Animal
     */
    abstract afficher(): void;

}