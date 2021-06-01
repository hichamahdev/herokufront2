import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { Slot } from '../slot';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-ajout-carte',
  templateUrl: './ajout-carte.component.html',
  styleUrls: ['./ajout-carte.component.css']
})
export class AjoutCarteComponent implements OnInit {

  cartes: Carte[] ;

  
  
  Equipement: Equipement [] ;
  equipement: Equipement = new Equipement() ;

  id_slot:number;
  slot: Slot [];
  slott: Slot = new Slot();
  id_equip: number;
  id_carte: number;

  constructor(private carteservice: CarteService,
    private slotService: SlotService,
    private route: ActivatedRoute,private equipService: EquipementService, private router:Router) { }

   ngOnInit(): void {
    this.id_equip = this.route.snapshot.params['id'];
    this.equipService.getEquipementById(this.id_equip).subscribe(
      data => {
        this.equipement = data;
        this.slot = this.equipement.slot
      }
    )
    
    this.getCartes();
  }

  private getCartes() {
    
    this.carteservice.getCartewithoutSlotList().subscribe(data =>{
      this.cartes=data
    }    
     )      
    }

    ajouterCarte(){
      this.slotService.getSlotById(this.id_slot).subscribe(
        data => {
          this.slott = data;
        }
      )
        
      this.slotService.addCarte(this.id_slot,this.id_carte,this.slott).subscribe(data =>{
        console.log(data);
      }
        
      )
      this.router.navigate(['/tyepeequip']);
      
    }

}
