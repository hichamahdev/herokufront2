import { Component, OnInit } from '@angular/core';
import { ListconnectionService } from '../listconnection.service';
import { Listecnx } from '../listecnx';
import { Typeport } from '../typeport';
import { TypeportService } from '../typeport.service';

@Component({
  selector: 'app-listconnection',
  templateUrl: './listconnection.component.html',
  styleUrls: ['./listconnection.component.css']
})
export class ListconnectionComponent implements OnInit {

  typeportA: Typeport[];
  typeportB: Typeport[];
  listcnx: Listecnx = new Listecnx();
  listcnxs: Listecnx[];
  typeportAa: Typeport = new Typeport() ;
  typeportBb: Typeport = new Typeport();

  selectedoption1: string = "";
  selectedoption2: string = "";

  constructor(private typeportService: TypeportService,
    private listcnxService: ListconnectionService
    ) { }

  ngOnInit(): void {
    this.getTypePort();

   
   

  }


  private getTypePort() {
    this.typeportService.getTypePortList().subscribe(data => {
            this.typeportA = data;
            this.typeportB = data;
            
            
  
    })}

    ajouterPortA(){
      this.typeportAa.nom = this.selectedoption1;
      
      
      
            
      
    }

    ajouterPortB(){
      this.typeportBb.nom = this.selectedoption2;
      console.log(this.typeportBb);
    }

}
