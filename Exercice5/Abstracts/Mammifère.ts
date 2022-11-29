import { Animal } from "../Interfaces/Animal";

export abstract class Mammifere implements Animal {
  _nom: string;
  _poids: number;
  _dateNaissance: Date;

  _classe: string = "Mammifere";

  _oxygene: number = 100;

  constructor(nom: string, poids: number, dateNaissance: Date) {
    this._nom = nom;
    this._poids = poids;
    this._dateNaissance = dateNaissance;
  }

  public get age(): number {
    const jour = new Date();
    let age = jour.getFullYear() - this._dateNaissance.getFullYear();
    const mois = jour.getMonth() - this._dateNaissance.getMonth();

    if (
      mois < 0 ||
      (mois === 0 && jour.getDate() < this._dateNaissance.getDate())
    ) {
      age--;
    }

    return age;
  }

  public get nom(): string {
    return this._nom;
  }

  public get poids(): number {
    return this._poids;
  }

  public set nom(nouveauNom) {
    this._nom = nouveauNom;
  }

  public set dateNaissance(nouvelleDateNaissance: Date) {
    this._dateNaissance = nouvelleDateNaissance;
  }

  public set poids(nouveauPoids) {
    this._poids = nouveauPoids;
  }

  public get oxygene(): number {
    return this._oxygene;
  }

  public set oxygene(oxygenation: number) {
    this._oxygene *= 1 + oxygenation / 100;
  }

  /**
   * Affiche les informations définissant l'Animal
   */
  afficher(): void {
    console.log(`Je suis un mammifère`);
  }
}
