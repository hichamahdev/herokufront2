import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anneau } from '../anneau';
import { AnneauService } from '../anneau.service';
import { Arc } from '../arc';
import { ArcService } from '../arc.service';
import { Carte } from '../carte';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { NotificationService } from '../notification.service';
import { Region } from '../region';
import { RegionService } from '../region.service';
import { Slot } from '../slot';
import { Port } from '../port';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-addarc',
  templateUrl: './addarc.component.html',
  styleUrls: ['./addarc.component.css']
})
export class AddarcComponent implements OnInit {
  
  region: Region[] ;
  
  anneau: Anneau[];
  regions: Region =new Region();
  id_region:number= 0;
  id_anneau:number;
  id_equip: number;
  id_slot: number;
  id_port:number;
  equipement: Equipement[];
  slot: Slot[];
  carte: Carte;
  port: Port[];

  id_arc: number;

  
  arc: Arc = new Arc() ;
  constructor(private arcService: ArcService,
    private regionService: RegionService,
    private anneauService: AnneauService,
    private equipementervice: EquipementService,
    private slotService: SlotService,
    private router:Router, 
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.id_arc = this.route.snapshot.params['id'];
    this.arcService.getArctById(this.id_arc).subscribe(data =>{
      this.arc = data;
    }

    )
    this.getRegion();
    this.onSelect(this.id_region);
    this.onSelectt(this.id_anneau);
 
  }

  saveArc(){
    
   this.arcService.AddRegionAnneaiArc(this.id_arc,this.id_region,this.id_anneau,this.id_equip,this.id_slot,this.id_port,this.arc).subscribe(data =>{})

  }
   



    goToArcListe(){
     
      this.router.navigate(['/connection']);
    }
  
  createArc(){
    this.saveArc();
    this.goToArcListe();
    console.log(this.arc.id);
  }

   getRegion() {
    this.regionService.getRegionList().subscribe(data => {
      this.region = data;  
      console.log(this.region);
      console.log(this.region[0].anneau[0].region_id);
      
    }
 
    )
  }

 getAnneau(){
   this.regionService.getAnneauByRegion(this.id_region).subscribe(
    data => {
      this.anneau = data;  

    }
   )
 }


 onSelect(id_region: number){
   this.regionService.getAnneauByRegion(id_region).subscribe(
     data => {
       this.anneau= data;
       console.log(id_region);
       this.regions = this.region[id_region];
       console.log(this.regions);
       
     }
   )

 }
 

 onSelectt(id_anneau: any){
   this.anneauService.getEquipementByAnneau(id_anneau).subscribe(
     data =>{
       this.equipement=data;
     }
   )
 }

 onSelecttt(id_equip:number){
   this.equipementervice.getSlotByEquipement(id_equip).subscribe(data=>{
      this.slot=data;
      
   })
 }

 onSelectttt(id_slot: number){
   this.slotService.getCarteBySlot(id_slot).subscribe(data => {
     this.carte = data;
     this.port = this.carte.port;
   })
 }
 
 
}
