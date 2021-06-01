import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anneau } from '../anneau';
import { AnneauService } from '../anneau.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-ajouteranneau',
  templateUrl: './ajouteranneau.component.html',
  styleUrls: ['./ajouteranneau.component.css']
})
export class AjouteranneauComponent implements OnInit {
  anneau: Anneau = new Anneau();

  constructor(private anneauService: AnneauService,
    private router:Router, 
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }
  saveAnneau(){
    
    this.anneauService.createAnneau(this.anneau).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    this.notificationService.success('! anneau ajouter avec success ');
    
  }

    goToAnneauListe(){
     
      this.router.navigate(['/equi']);
    }
  
  createAnneau(){
    this.saveAnneau();
    this.goToAnneauListe();
  }


}
