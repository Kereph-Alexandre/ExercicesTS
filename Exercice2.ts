// Exercice 2

/**
 * Affiche dans la console la somme des deux nombre entrés en paramètre
 * @param number1
 * @param number2
 */
function Addition(number1: number, number2: number): void {
  const resultat: number = number1 + number2;
  console.log(resultat);
}

Addition(2, 5);
class Chat {
  nom!: string;
  race!: string;
  age!: number;
  poid!: number;

  /**
   * Décrit le chat
   * @param surnoms au kazoo
   */
  afficherChat(...surnoms: string[]): void {
    console.log(
      `Mon chat, ${this.nom}, est un ${this.race} de ${
        this.age
      } ans. Il pèse actuellement ${
        this.poid
      }. On l'appelle aussi ${surnoms.join(" ou ")}`
    );
  }
}

const chat1: Chat = new Chat();

chat1.nom = "bidule";
chat1.race = "truc";
chat1.age = 8;
chat1.poid = 4;

chat1.afficherChat("machin", "chose");
