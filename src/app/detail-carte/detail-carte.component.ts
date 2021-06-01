import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { ServicePortService } from '../service-port.service';

@Component({
  selector: 'app-detail-carte',
  templateUrl: './detail-carte.component.html',
  styleUrls: ['./detail-carte.component.css']
})
export class DetailCarteComponent implements OnInit {

  id:number;
  carte: Carte;

  constructor(private route: ActivatedRoute,
    private carteService: CarteService,
    private router:Router,
    private portService: ServicePortService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carte = new Carte();

    this.carteService.getCartetById(this.id).subscribe(data => {
      this.carte = data ;
    });
  }

  addport(id:number){
    this.router.navigate(['/addport', id]) ;
  }

  deletePort(id:number){
    this.portService.deletePort(id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['detailecarte',this.id]);
      }); 
    
    })
    
  }

  updatePort(id:number){
    this.router.navigate(['/updateport', id]) ;
  }

}
