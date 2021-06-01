import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-ajout-equip',
  templateUrl: './ajout-equip.component.html',
  styleUrls: ['./ajout-equip.component.css']
})
export class AjoutEquipComponent implements OnInit {

  equipements: Equipement [] ;
  Site: Site[] ;  
  
  site: Site = new Site() ;
  id_equip: number;
  id_site: number;

  constructor(private siteservice: SiteService,
     private route: ActivatedRoute,
     private equipService: EquipementService,
      private router:Router) { }

  ngOnInit(): void {
    this.id_site = this.route.snapshot.params['id'];
    this.getEquipements();
  }

  private getEquipements() {
    
    this.equipService.getEquipwithouSiteList().subscribe(data =>{this.equipements=data
      console.log(this.equipements[0].siteid)}    
     )      
    }
    

    ajouterEquipement(){

   this.siteservice.addEquip(this.id_site,this.id_equip,this.site).subscribe(data =>{
    console.log(data);
  },
    
  error => console.log(error));
  this.router.navigate(['/equi']);

  }
  
  

}
