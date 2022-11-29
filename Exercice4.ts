abstract class Chat {
  protected _nom!: string;
  protected _age!: number;
  protected _poids!: number;

  constructor(nom: string, age: number, poids: number) {
    this.nom = nom;
    this.age = age;
    this.poids = poids;
  }

  get nom(): string {
    return this._nom;
  }

  get age(): number {
    return this._age;
  }

  get poids(): number {
    return this._poids;
  }

  set nom(nom: string) {
    this._nom = nom;
  }

  set age(age: number) {
    this._age = age;
  }

  set poids(poids: number) {
    this._poids = poids;
  }

  abstract afficherChat(): void;
}

class Europeen extends Chat {
  private _surnoms: string[];
  private _origine: string = 'Europe';

  constructor(nom: string, age: number, poids: number, surnoms:string[]) {
    super(nom, age, poids);
    this._surnoms = surnoms;
  }
  get surnoms(): string[] {
    return this._surnoms;
  }

  set surnoms(surnoms: string[]) {
    surnoms.forEach(surnom => {this._surnoms.push(surnom)});
  }
 

  /**
   * Décrit le chat
   * @param surnoms au kazoo
   */
   afficherChat(): void {
    console.log(
      `Mon chat, ${this.nom}, vient de ${this._origine} de ${this.age} ans. Il pèse actuellement ${this.poids}kg. On le nomme aussi ${this.surnoms}`
    );
  }
}

const chat1:Europeen = new Europeen('Bébou', 8, 4, ['Clochard', 'Labelle', 'Rex']);
chat1.nom = 'Felix'
console.log(chat1);
chat1.afficherChat();
