import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';

@Component({
  selector: 'app-updat-equip',
  templateUrl: './updat-equip.component.html',
  styleUrls: ['./updat-equip.component.css']
})
export class UpdatEquipComponent implements OnInit {

  id: number;
  equipement: Equipement = new Equipement();

  constructor(private equipementService: EquipementService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.equipementService.getEquipementById(this.id).subscribe(data =>{
      this.equipement = data;
    },
    error => console.error());
    
      
  }

  onSubmit(){
    this.equipementService.updateEquipement(this.id,this.equipement).subscribe( data =>{
        this.goToEquipementList();
    },
    error => console.error());
    
    
  }

  goToEquipementList(){
    this.router.navigate(['/tyepeequip']);
}
}
