import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { Ressource } from '../ressource';
import { RessourceService } from '../ressource.service';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-updateress',
  templateUrl: './updateress.component.html',
  styleUrls: ['./updateress.component.css']
})
export class UpdateressComponent implements OnInit {
  
  id: number;
  ressource: Ressource = new Ressource();
  equipements: Equipement[];
  carte: Carte[];
  service: Servicee[];


  constructor(private ressourceService: RessourceService,
    private route: ActivatedRoute,
    private router: Router,
    private equipementService:EquipementService,
    private carteservice: CarteService,
    private serviceeservice: ServiceeService) { }

  ngOnInit(): void {
    this.getEquipements();
    this.getCartes();
    this.getService();
    this.id = this.route.snapshot.params['id'];
    this.ressourceService.getRessourceById(this.id).subscribe(data =>{
      this.ressource = data;
    },
    error => console.error());
  }

  onSubmit(){
    this.ressourceService.updateRessource(this.id,this.ressource).subscribe( data =>{
        this.goToRessourceList();
    },
    error => console.error());
    
    
  }

  goToRessourceList(){
    this.router.navigate(['/ressource']);
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
