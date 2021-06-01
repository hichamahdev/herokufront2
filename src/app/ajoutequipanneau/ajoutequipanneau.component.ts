import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anneau } from '../anneau';
import { AnneauService } from '../anneau.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';

@Component({
  selector: 'app-ajoutequipanneau',
  templateUrl: './ajoutequipanneau.component.html',
  styleUrls: ['./ajoutequipanneau.component.css']
})
export class AjoutequipanneauComponent implements OnInit {
  equipements: Equipement [] ;
  Anneau: Anneau[] ;  
  
  anneau: Anneau = new Anneau() ;
  id_equip: number;
  id_anneau: number;

  constructor(private route: ActivatedRoute,
    private anneauService: AnneauService,
    private equipService: EquipementService,
     private router:Router) { }

  ngOnInit(): void {
    this.id_anneau = this.route.snapshot.params['id'];
    this.getEquipements();
  }

  private getEquipements() {
    
    this.equipService.getEquipwithouAnneauList().subscribe(data =>{this.equipements=data
      }    
     )      
    }

    ajouterEquipement(){

      this.anneauService.addEquip(this.id_anneau,this.id_equip,this.anneau).subscribe(data =>{
       console.log(data);
     },
       
     error => console.log(error));
     this.router.navigate(['/equi']);
   
     }

}
