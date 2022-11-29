import { Collaborateur } from "./Collaborateur";

export interface Remunerer extends Collaborateur {
    salaire: number;
    augmentation(percetn: number): void;
  }