export interface Animal {
  _nom: string;
  _poids: number;
  _dateNaissance: Date;

  afficher(): void;
}
