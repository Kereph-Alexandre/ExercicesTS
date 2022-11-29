import { Remunerer } from "../Interfaces/Remunerer";

class CDI implements Remunerer {
    nom: string;
    prenom: string;
    salaire: number;
  
    constructor(nom: string, prenom: string, salaire: number) {
      this.nom = nom;
      this.prenom = prenom;
      this.salaire = salaire;
    }
  
    travailler(): string {
      return `${this.prenom} ${this.nom} travaille comme un fou car il aimerait une augmentation`;
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
  }