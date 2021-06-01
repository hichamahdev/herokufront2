import { Equipement } from "./equipement";
import { Site } from "./site";

export class Anneau {
    id: number;
    nom: string ;
    type: string ;
    notes: string ; 
    equipements: Equipement[];
    sites: Site[];
    region_id:number;
    

}
