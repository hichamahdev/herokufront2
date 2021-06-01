import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { NotificationService } from '../notification.service';
import { Port } from '../port';
import { Region } from '../region';
import { RegionService } from '../region.service';
import { Ressource } from '../ressource';
import { RessourceService } from '../ressource.service';
import { ServicePortService } from '../service-port.service';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-addressource',
  templateUrl: './addressource.component.html',
  styleUrls: ['./addressource.component.css']
})
export class AddressourceComponent implements OnInit {

  ressource: Ressource = new Ressource();
  equipements: Equipement[];
  carte: Carte[];
  service: Servicee[];
  constructor(private ressourceService: RessourceService,
    private router:Router,
    private notificationService: NotificationService,
    private equipementService:EquipementService,
    private carteservice: CarteService,
    
    private serviceeservice: ServiceeService
    ) { }

  ngOnInit(): void {
    this.getEquipements();
    this.getCartes();
    this.getService();
    
  }

  saveRessource(){
    this.ressourceService.createRessource(this.ressource).subscribe(data =>{
      console.log(data);
      
    },
      
    error => console.log(error));
    this.notificationService.success('! Ressource ajouter avec success ');
      
  }

  goToRessourceList(){
      this.router.navigate(['/ressource']);
  }

  createRessource(){
    console.log(this.ressource);
    this.saveRessource();
    this.goToRessourceList();
  }

  private getEquipements() {
    this.equipementService.getEquipementList().subscribe(data => {
      this.equipements = data; 
    } ) }

    private getCartes() {
      this.carteservice.getCarteList().subscribe(data => {
              this.carte = data;            
      })}

      private getService() {
        this.serviceeservice.getServiceList().subscribe(data => {
                this.service = data;
 
        })}

}
