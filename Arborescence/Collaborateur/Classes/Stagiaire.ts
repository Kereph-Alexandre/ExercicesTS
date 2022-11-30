import { Collaborateur } from "../Interfaces/Collaborateur";
import { DureeLimite } from "../Interfaces/DureeLimite";

class Stagiaire implements DureeLimite {
    nom: string;
    prenom: string;
    finContrat: Date;
  
    constructor(nom: string, prenom: string, finContrat: Date) {
      this.nom = nom;
      this.prenom = prenom;
      this.finContrat = finContrat;
    }
  
    get fin(): string {
      return this.finContrat.toLocaleDateString();
    }
  
    prolonger(jours: number): void {
      //permet a partir d'une date, de la modifier
      this.finContrat.setDate(this.finContrat.getDate() + jours);
      console.log(
        `La date de fin de contrat a été prolongée jusqu'au ${this.fin}`
      );
    }
  
    travailler(): string {
      return `${this.prenom} ${this.nom} fait des trucs`;
    }
  }

  export default Stagiaire;