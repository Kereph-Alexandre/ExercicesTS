import { Mammifere } from "../Abstracts/Mammifère";
import { Terrestre } from "../Interfaces/Milieux/Terrestre";

class Chat extends Mammifere implements Terrestre {
  nombrePatte: number = 4;
  milieu: string = "Terre";

  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  afficher(): void {
    console.log(
      `Je suis un Chat qui s'appelle ${this._nom}. J'ai ${this.age} ans et pèse ${this._poids}kg`
    );
  }

  respirerHorsDeLeau(milieu: string): void {
    if (milieu != "Eau") {
      this.oxygene = 5;
      console.log(`Je respire, mon oxygènation est de ${this.oxygene}`);
    } else {
      this.oxygene = -30;
      console.log(`Je ne peux pas respirer`);
    }
  }

  marcher(): void {
    this.oxygene = -5;
    console.log(
      `J'utilise mes ${this.nombrePatte} pattes pour me déplacer. Je suis fatigué (oxy : ${this.oxygene})`
    );
  }

  miauler(): void {
    console.log("miaou");
  }
}

export default Chat;
