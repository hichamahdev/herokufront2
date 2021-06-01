import { Carte } from "./carte";
import { Port } from "./port";
import { PortEquip } from "./port-equip";
import { Slot } from "./slot";

export class Equipement {

    id: number;
    nomSupEquip: string ;
    nomEquip: string ;
    categorieEquip: string ;
    numbSlot: number ;
    numeroSlotMin: number ;
    numeroSlotFin: number ;
    typeSlot: string ;
    reference: string ;
    
    debitMax: number ;

    carte: Carte[];
    slot: Slot[];
    portEquip: PortEquip[];
    siteid: number;


}
