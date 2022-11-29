interface Collaborateur {
  nom: string;
  prenom: string;
  travailler(): string;
}

interface Remunerer extends Collaborateur {
  salaire: number;
  augmentation(percetn: number): void;
}

interface DureeLimite extends Collaborateur {
  finContrat: Date;
  prolonger(nombreJours: number): void;
}

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
    return `La fin de contract de ${this.nom} ${
      this.prenom
    } est fixée au ${this.finContrat.toLocaleDateString()}`;
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
        return `La fin de contract de ${this.nom} ${
          this.prenom
        } est fixée au ${this.finContrat.toLocaleDateString()}`;
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

const employee: CDI = new CDI ('Terieur', 'Alex', 1000);
const larbin : Stagiaire = new Stagiaire('Nareff', 'Pol', new Date('2022/12/31'));
const temporaire : CDD = new CDD ('Nicouette', 'Sandra', new Date ('2022/12/31'), 1000)

employee.augmentation(10);
larbin.prolonger(30);
temporaire.prolonger(60); 
temporaire.augmentation(11)