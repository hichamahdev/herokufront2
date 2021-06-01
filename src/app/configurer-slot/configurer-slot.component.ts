import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { Slot } from '../slot';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-configurer-slot',
  templateUrl: './configurer-slot.component.html',
  styleUrls: ['./configurer-slot.component.css']
})
export class ConfigurerSlotComponent implements OnInit {

  id: number;
  idSlot:number;
  equipement: Equipement = new Equipement();
  label: String = "";
  index: number = 0;
  slottt:Slot = new Slot();


  slot: Slot[] ;

  slott:Slot ;


  

  constructor(private equipementService: EquipementService,
    private slotService: SlotService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.equipementService.getEquipementById(this.id).subscribe(data =>{
      console.log(data);
      this.equipement = data;
      this.slot = this.equipement.slot;
      console.log(this.slot);
    },
    error => console.error());
    
  }

  onSubmit(){
    
    
    
  }

  EditSlot(idd:number){
    this.router.navigate(['/editslot',idd]);
  

}

  

  goToEquipementList(){
    this.router.navigate(['/tyepeequip']);
}

}
