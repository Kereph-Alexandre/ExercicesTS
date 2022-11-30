import Note from "./Note";

export default class Bulletin {
  private _notes: Note[] = [];

  /**
   * Ajoute une nouvelle note au carnet de notes
   * @param nouvelleNote Note a ajouter
   */
  public ajouterNote(nouvelleNote: Note): void {
    if (nouvelleNote.valeur > 20 || nouvelleNote.valeur < 0) {
      throw new Error("La note est incorrecte ! Choke Desu Ne");
    } else {
      this._notes.push(nouvelleNote);
    }
  }

  /**
   * Calcule la moyenne des notes
   * @returns un chaine de caractere contenant la moyenne avec 2 décimales
   */
  public calculerMoyenne(): string {
    let somme: number = 0;

    this._notes.forEach((note) => {
      somme += note.valeur;
    });
    return (somme / this._notes.length).toFixed(2);
  }

  /**
   * Affiche l'ensemble des notes contenue dans le Bulletin
   */
  public afficherNotes(): void {
    this._notes.forEach((note) => {
      note.afficherNote();
    });
  }
}
