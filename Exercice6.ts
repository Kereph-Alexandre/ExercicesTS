// Exercice 6
// Vérifier que chacune des notes est entre 0 et 20

/**
 * Affiche dans la console le nom d'un élève, sa moyenne, et le commentaire associé
 * @param studentName le nom/prénom de l'étudiant
 * @param studentNotes l'ensemble de ses notes
 */
 function evaluateStudent(studentName: string, ...studentNotes: number[]): void {
    const studentAverage: number = calculateAverage(...studentNotes);
    const studentMention: string = addMention(studentAverage);
  
    console.log(
      `${studentName} a une moyenne de ${studentAverage} : c'est ${studentMention}`
    );
  }
  
  /**
   * Calcule la moyenne d'un élève à partir de l'ensemble de ses notes
   * @param numbers les notes de l'éleve
   * @returns la moyenne de l'élève
   */
  function calculateAverage(...numbers: number[]): number {
    let notesAverage: number = 0;
  
    numbers.forEach((number) => {
      notesAverage += number;
    });
  
    notesAverage /= numbers.length;
  
    return notesAverage;
  }
  
  /**
   * Etablit la mention accompagnant le dossier d'un élève
   * @param note la moyenne de l'élève
   * @returns la mention associée
   */
  function addMention(note: number): string {
    let mention: string = "";
  
    if (note > 20 || note < 0) {
      mention = `note invalide`;
    } else if (note < 5) {
      mention = `Catastrophique`;
    } else if (note < 11) {
      mention = `Insuffisant`;
    } else if (note < 15) {
      mention = `Passable`;
    } else if (note < 19) {
      mention = `Bien`;
    } else mention = `Très Bien`;
  
    return mention;
  }
  
  evaluateStudent("Alexandre", 12, 18, 15, 13, 26);