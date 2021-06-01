import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-add-equip',
  templateUrl: './add-equip.component.html',
  styleUrls: ['./add-equip.component.css']
})
export class AddEquipComponent implements OnInit {

  equipement: Equipement = new Equipement();
  constructor(private equipementService: EquipementService,
    private router:Router,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
  }
  saveEquipement(){
    this.equipementService.createEquipement(this.equipement).subscribe(data =>{
      console.log(data);
      
    },
      
    error => console.log(error));
    this.notificationService.success('! Equipement ajouter avec success ');
      
  }

  goToEquipementList(){
      this.router.navigate(['/tyepeequip']);
  }

  getequipement(){
    this.equipementService.getEquipementList()
  }

  createEquipement(){
    console.log(this.equipement);
    this.saveEquipement();
    this.goToEquipementList();
  }

}
