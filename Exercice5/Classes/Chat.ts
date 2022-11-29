import { Mammifere } from "../Abstracts/Mammifère";
import { Terrestre } from "../Interfaces/Milieux/Terrestre";

class Chat extends Mammifere implements Terrestre {
  _nombrePatte: number = 4;
  _milieu: string = "Terre";
  _localisation:string = 'Salon';

  constructor(nom: string, poids: number, dateNaissance: Date) {
    super(nom, poids, dateNaissance);
  }

  public get localisation(){return this._localisation};
  public get milieu() {return this._milieu}
  public get pattes() {return this._nombrePatte}

  public set localisation(nouveauLieu:string){

  }

  afficher(): void {
    console.log(
      `Je suis un Chat qui s'appelle ${this.nom}. J'ai ${this.age} ans et pèse ${this.poids}kg. Vous me trouverez dans le/la ${this._localisation}`
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

  marcher(energie:number, lieu:string): void {
    this.oxygene = -energie;
    console.log(
      `J'utilise mes ${this._nombrePatte} papattes pour me déplacer vers ${lieu}. Je suis fatigué (oxy : ${this.oxygene})`
    );
  }

  miauler(): void {
    console.log("miaou");
  }
}

export default Chat;
