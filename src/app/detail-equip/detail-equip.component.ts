import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteService } from '../carte.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { PortEquipService } from '../port-equip.service';

@Component({
  selector: 'app-detail-equip',
  templateUrl: './detail-equip.component.html',
  styleUrls: ['./detail-equip.component.css']
})
export class DetailEquipComponent implements OnInit {

  id:number;
  equipement:Equipement;

  constructor(private route: ActivatedRoute,
     private equipementService: EquipementService,
     private router:Router,
     private serviceCarte:CarteService,private servicePortEquip: PortEquipService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.equipement = new Equipement();

    this.equipementService.getEquipementById(this.id).subscribe(data => {
      this.equipement = data ;
      console.log(this.equipement);
    });
  }

  
  addPortEquip(id:number){
    this.router.navigate(['/addportequip', id]) ;
  }
 



}
