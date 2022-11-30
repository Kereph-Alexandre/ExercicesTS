import Bulletin from "./Bulletin";
import Note from "./Note";

export default class Eleve {
  private _nom: string;
  private _prenom: string;

  private _bulletin: Bulletin;

  constructor(nom: string, prenom: string, bulletin: Bulletin) {
    this._nom = nom;
    this._prenom = prenom;
    this._bulletin = bulletin;
  }

  /**
   * Ajoute une ou des nouvelles notes au bulletin
   * @param notes Liste des notes à ajouter
   */
  public ajouterNotes(...notes: Note[]): void {
    notes.forEach((note) => {
      this._bulletin.ajouterNote(note);
    });
  }

  /**
   * Affiche la moyenne de l'Élève
   */
  public afficherMoyenne(): void {
    console.log(
      `La moyenne de ${this._prenom} est de ${this._bulletin.calculerMoyenne()}`
    );
  }

  /**
   * Affiche l'ensemble des notes de l'Élève
   */
  public afficherNotes(): void {
    console.log(`Notes de ${this._prenom} ${this._nom} : \r\n`);
    this._bulletin.afficherNotes();
  }
}
