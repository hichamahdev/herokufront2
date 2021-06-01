import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';

@Component({
  selector: 'app-add-carte',
  templateUrl: './add-carte.component.html',
  styleUrls: ['./add-carte.component.css']
})
export class AddCarteComponent implements OnInit {

  carte: Carte = new Carte();
  constructor(private carteService:CarteService,
    private router:Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveCarte(){
    
    this.carteService.createCarte(this.carte).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    
  }

    goToCarteListe(){
     
      this.router.navigate(['/typecarte']);
    }
  
  createCarte(){
    this.saveCarte();
    this.goToCarteListe();
  }

  


}
