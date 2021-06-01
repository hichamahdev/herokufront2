import { Anneau } from "./anneau";
import { Equipement } from "./equipement";
import { Port } from "./port";
import { Region } from "./region";
import { Slot } from "./slot";

export class Arc {
    id: number;
    nom: string ;
    region: Region[]  ;
    anneau: Anneau[];
    equipement: Equipement[];
    slot: Slot[];
    port: Port[];
}
