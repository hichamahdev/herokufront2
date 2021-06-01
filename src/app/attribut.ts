import { Carte } from "./carte";
import { Clientt } from "./clientt";
import { Equipement } from "./equipement";
import { Port } from "./port";
import { Region } from "./region";
import { Servicee } from "./servicee";
import { Site } from "./site";

export class Attribut {

    id: number;
    nomtype: string;
    typevaleur: string ;
    taille: number;
    valeurreq: boolean;
    pntattach: string;
    equipements: Equipement[];
    clients: Clientt[];
    services: Servicee[];
    regions: Region[];
    sites: Site[];
    cartes: Carte[];
    ports: Port[];
    

}
