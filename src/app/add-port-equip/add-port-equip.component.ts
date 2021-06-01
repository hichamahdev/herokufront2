import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortEquip } from '../port-equip';
import { PortEquipService } from '../port-equip.service';
import { Typeport } from '../typeport';
import { TypeportService } from '../typeport.service';

@Component({
  selector: 'app-add-port-equip',
  templateUrl: './add-port-equip.component.html',
  styleUrls: ['./add-port-equip.component.css']
})
export class AddPortEquipComponent implements OnInit {

  idEquipe: number;
  port: PortEquip = new PortEquip();
  typeports: Typeport[];

  constructor(private portService: PortEquipService,
     private router: Router,
     private route: ActivatedRoute,
     private typeportService: TypeportService) { }

  ngOnInit(): void {
    this.idEquipe = this.route.snapshot.params['id'];
    this.getTypePort();
  }

  savePortEquip(){
    this.port.equipementid = this.idEquipe;
    this.portService.createPortEquip(this.port).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    
  }

  goToEquipeDetails(){
     
    this.router.navigate(['/detailequip',this.idEquipe]);
  }


  createPortEquip(){
    this.savePortEquip();
    this.goToEquipeDetails();

  }

  private getTypePort() {
    this.typeportService.getTypePortList().subscribe(data => {
            this.typeports = data;
  
    })}

}
