import { Carte } from "./carte";
import { Equipement } from "./equipement";
import { Servicee } from "./servicee";

export class Ressource {
    id: number;
    nom: string ;
    nombre: number ;
    type: string ;
    point_att: string ;
    cartes: Carte[];
    equipements: Equipement[];
    services: Servicee[];

}
