import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortEquip } from '../port-equip';
import { PortEquipService } from '../port-equip.service';
import { Typeport } from '../typeport';
import { TypeportService } from '../typeport.service';

@Component({
  selector: 'app-addportequip2',
  templateUrl: './addportequip2.component.html',
  styleUrls: ['./addportequip2.component.css']
})
export class Addportequip2Component implements OnInit {

  port: PortEquip = new PortEquip();
  typeports: Typeport[];

  constructor(private portService: PortEquipService,
    private router: Router,
    private route: ActivatedRoute,
    private typeportService: TypeportService) { }

  ngOnInit(): void {
    this.getTypePort();
  }

  savePort(){
    
    this.portService.createPortEquip(this.port).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    
  }

    goToPortListe(){
     
      this.router.navigate(['/typeportequip']);
    }
  
  createPort(){
    this.savePort();
    this.goToPortListe();
  }

  private getTypePort() {
    this.typeportService.getTypePortList().subscribe(data => {
            this.typeports = data;
  
    })}


}
