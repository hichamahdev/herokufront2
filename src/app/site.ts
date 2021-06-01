import { Equipement } from "./equipement";

export class Site {
    id: number;
    nom: string ;
    type: string ;
    notes: string ;
    regionid: number;
    equipement: Equipement[];
}
