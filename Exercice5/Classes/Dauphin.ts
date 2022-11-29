import { Mammifere } from "../Abstracts/Mammifère";
import { Aquatique } from "../Interfaces/Milieux/Aquatique";

class Dauphin extends Mammifere implements Aquatique {
  _emplacement: string = "Eau";
  _peutRespirer: boolean = true;

  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  public get emplacement(): string {
    return this._emplacement;
  }

  public set emplacement(nouvelEmplacement: string) {
    this._emplacement = nouvelEmplacement;
  }

  afficher(): void {
    console.log(
      `Je suis un dauphin nommé ${this._nom}. J'ai ${this.age} et pèse ${this._poids}kg`
    );
  }

  /**
   * Permet au dauphin de respirer lorsqu'il se situe en profondeur
   */
  respirerSousLeau(): void {
    this.retenirRespiration();
    this.nager("Surface");

    if (this._peutRespirer) {
      this.oxygene = 30;
    }
    this.nager("Eau");
  }

  /**
   * empêche le dauphin de respirer
   */
  retenirRespiration(): void {
    this._peutRespirer = false;
    console.log(`Je bloque ma respiration`);
  }

  /**
   * Permet au dauphin de se déplacer vers un nouveau lieux
   * @param destination nouveau lieu
   */
  nager(destination: string): void {
    this.emplacement = destination;
    this.oxygene = -5;

    if (destination == "Surface") {
      this._peutRespirer = true;
      console.log(`Je peux respirer`);
    }

    console.log(
      `Je me suis déplacé vers ${this.emplacement}, je suis fatigué (oxygenation : ${this.oxygene})`
    );
  }

  /**
   * oui, bah comme flipper quoi
   */
  cliquetter(): void {
    console.log(`kikikikiki`);
  }
}

export default Dauphin;
