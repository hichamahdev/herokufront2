import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-equipcarte',
  templateUrl: './equipcarte.component.html',
  styleUrls: ['./equipcarte.component.css']
})
export class EquipcarteComponent implements OnInit {

  carte: Carte[];
  equipement: Equipement[];

  nomCartes: String[];

  constructor(private carteService: CarteService,
 
    private equipementService: EquipementService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getCartes();
    this.getEquipements();
  }

  private getCartes() {
    this.carteService.getCarteList().subscribe(data => {
            this.carte = data;
            
      
    })}

    private getEquipements() {
      this.equipementService.getEquipementList().subscribe(data => {
        this.equipement = data;
           }   )  }


           ajouter(){

            this.notificationService.success('! Type cartes  ajouter avec success ');

           }

}
