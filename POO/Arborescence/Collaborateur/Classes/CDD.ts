import { Collaborateur } from "../Interfaces/Collaborateur";
import { Remunerer } from "../Interfaces/Remunerer";
import { DureeLimite } from "../Interfaces/DureeLimite";

class CDD implements Remunerer, DureeLimite{
    nom: string;
    prenom: string;
    salaire: number;
    finContrat: Date;

    constructor(nom:string, prenom:string, finContrat:Date, salaire:number){
        this.nom = nom;
        this.prenom = prenom; 
        this.salaire = salaire; 
        this.finContrat = finContrat;
    }

    get fin(): string {
        return this.finContrat.toLocaleDateString();
      }

    /**
   * Permet de'augmenter le salaire d'un employé
   * @param pourcentage de l'augmentation
   */
  augmentation(pourcentage: number): void {
    if (pourcentage < 0) {
      throw new Error("Le pourcentage doit être positif");
    } else {
      console.log(
        `le salaire de ${this.prenom} ${this.nom} va être augmenté de ${pourcentage}%.`
      );

      const augmentation = (this.salaire * pourcentage) / 100;
      console.log(`il gagnera ${augmentation}€ supplémentaire`);

      this.salaire += augmentation;
      console.log(`Son nouveau salaire est de ${this.salaire}`);
    }
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

export default CDD;