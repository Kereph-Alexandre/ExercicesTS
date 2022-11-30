// Exercice 3

/**
 * Calcule la différence entre deux nombres, puis demande l'affichage d'un commentaire
 * @param sellPrice
 * @param prodPrice
 */
 function calculateProfits(sellPrice: number, prodPrice: number): void {
    const profits: number = sellPrice - prodPrice;
    console.log(showProfits(profits));
  }
  
  /**
   * Modifie le commentaire selon qu'il s'agit de perte ou de gain
   * @param profits
   * @returns
   */
  function showProfits(profits: number): string {
    let result: string = "";
  
    if (profits > 0) {
      result = `Gain de ${profits}`;
    } else {
      result = `Perte de ${Math.abs(profits)}`;
    }
  
    return result;
  }
  
  calculateProfits(20, 15);
class Chat {
  private _nom!: string;
  private _race!: string;
  private _age!: number;
  private _poid!: number;

  constructor(nom: string, race: string, age: number, poid: number) {
    this.nom = nom;
    this.race = race;
    this._age = age;
    this.poid = poid;
  }

  get nom(): string {
    return this._nom;
  }

  get race(): string {
    return this._race;
  }

  get age(): number {
    return this._age;
  }

  get poid(): number {
    return this._poid;
  }

  set nom(nouveauNom: string) {
    if (nouveauNom.trim().length > 0) {
      this._nom = nouveauNom;
    } else {
      throw new Error("un nom valide, steuplait");
    }
  }

  set race(nouvelleRace: string) {
    if (nouvelleRace.trim().length > 1) {
      this._race = nouvelleRace;
    } else {
      throw new Error("Ca existe ca ?");
    }
  }

  set age(nouvelAge: number) {
    if (nouvelAge > this.age) {
      this._age = nouvelAge;
    } else {
      throw new Error("tu rajeunis");
    }
  }

  set poid(nouveauPoid: number) {
    if (nouveauPoid > 0) {
      this._poid = nouveauPoid;
    } else {
      throw new Error(`Ah bon ? tu es constitué d'antimatière ?`);
    }
  }

  /**
   * Décrit le chat
   * @param surnoms au kazoo
   */
  afficherChat(): void {
    console.log(
      `Mon chat, ${this.nom}, est un ${this.race} de ${this.age} ans. Il pèse actuellement ${this.poid}.`
    );
  }
}

const chat1: Chat = new Chat("bidule", "truc", 8, 4);
chat1.nom = "test";

chat1.afficherChat();
