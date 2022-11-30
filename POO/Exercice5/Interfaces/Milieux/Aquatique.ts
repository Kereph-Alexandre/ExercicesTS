import { MilieuNaturel } from "./MilieuNaturel";

export interface Aquatique extends MilieuNaturel {
  respirerSousLeau(): void;
  nager(destination: string): void;
}
