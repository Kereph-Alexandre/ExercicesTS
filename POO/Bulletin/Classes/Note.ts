export default class Note {
  private _matiere: string;
  private _valeur: number;

  constructor(matiere: string, valeur: number) {
    this._matiere = matiere;
    this._valeur = valeur;
  }

  get valeur(): number {
    return this._valeur;
  }

  get valeurSurVingt(): string {
    return this.valeur + "/20";
  }

  get matiere(): string {
    return this._matiere;
  }

  /**
   * Afficher la note sous forme de chaine de caractère au format "Matière : note/20"
   */
  public afficherNote(): void {
    console.log(`${this.matiere} : ${this.valeurSurVingt}`);
  }
}
