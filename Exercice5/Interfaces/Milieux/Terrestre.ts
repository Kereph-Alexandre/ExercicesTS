import { MilieuNaturel } from "./MilieuNaturel";

export interface Terrestre extends MilieuNaturel {
  respirerHorsDeLeau(milieu: string): void;
  marcher(energie: number, destination: string): void;
}
