export interface Animal {
  _nom: string;
  _poids: number;
  _dateNaissance: Date;

  _oxygene:number;

  afficher(): void;
}
