//définition de classe
class Employe {
  // Les attributs de la classe
  // le ! permet de préciser qu'on définira la valeur plus tard

  private _nom!: string;
  private _prenom!: string;
  private _salaire!: number;

  constructor(nom: string, prenom: string, salaire: number = 1000) {
    this.nom = nom;
    this.prenom = prenom;
    this._salaire = salaire;
  }

  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  get fullName(): string{
    return `${this.prenom} ${this.nom}`
  }

  get salaire(): number {
    return this._salaire;
  }

  set nom(nouveauNom: string) {
    if (nouveauNom.trim().length > 1) {
      this._nom = nouveauNom;
    } else {
      throw new Error("Le nom est trop court");
    }
  }

  set prenom(nouveauPrenom: string) {
    if (nouveauPrenom.trim().length > 1) {
      this._prenom = nouveauPrenom;
    } else {
      throw new Error("Le prénom est trop court");
    }
  }

  set salaire(nouveauSalaire: number) {
    if (nouveauSalaire > this.salaire) {
      this._salaire = nouveauSalaire;
    } else {
      throw new Error("Le nouveau salaire doit être supérieur au précédent");
    }
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

const employe1: Employe = new Employe("Pol", "nareff");

employe1.augmentation(10);
console.log(employe1.fullName);
