import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';

@Component({
  selector: 'app-update-carte',
  templateUrl: './update-carte.component.html',
  styleUrls: ['./update-carte.component.css']
})
export class UpdateCarteComponent implements OnInit {

  id:number;
  carte:Carte = new Carte();

  constructor(private carteservice: CarteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carteservice.getCartetById(this.id).subscribe(data => {
      this.carte = data;
    },
    error => console.log(error));
  }

  updateCarte(){
    this.carteservice.updateCarte(this.id, this.carte).subscribe(data => {
        this.goToCarteList();
    },
    error => console.error());

  }

  goToCarteList(){
   
   this.router.navigate(['/typecarte']);
     
}


}
