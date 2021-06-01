import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attribut } from '../attribut';
import { AttributService } from '../attribut.service';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-updatattribut',
  templateUrl: './updatattribut.component.html',
  styleUrls: ['./updatattribut.component.css']
})
export class UpdatattributComponent implements OnInit {

  id: number;
  attribut: Attribut = new Attribut();

  equipements: Equipement[];
  carte: Carte[];
  service: Servicee[];


  constructor(private attributService: AttributService,
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
    this.attributService.getAttributById(this.id).subscribe(data =>{
      this.attribut = data;
    },
    error => console.error());
  }

  onSubmit(){
    this.attributService.updateAttribut(this.id,this.attribut).subscribe( data =>{
        this.goToAttributList();
    },
    error => console.error());
    
    
  }

  goToAttributList(){
    this.router.navigate(['/attribut']);
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
