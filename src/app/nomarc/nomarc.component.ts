import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arc } from '../arc';
import { ArcService } from '../arc.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-nomarc',
  templateUrl: './nomarc.component.html',
  styleUrls: ['./nomarc.component.css']
})
export class NomarcComponent implements OnInit {
 
  arc: Arc = new Arc() ;

  constructor(private arcService: ArcService,
    
    private router:Router, 
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  saveArc(){
    
    this.arcService.createArc(this.arc).subscribe(data => {
     

    },
    erroe => console.error());
    this.notificationService.success('! arc ajouter avec success ');
    
   
  }

  createArc(){
    this.saveArc();
    this.goToArcListe();
    console.log(this.arc.id);
  }

  goToArcListe(){
     
    this.router.navigate(['/connection']);
  }






}
