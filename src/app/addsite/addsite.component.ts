import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-addsite',
  templateUrl: './addsite.component.html',
  styleUrls: ['./addsite.component.css']
})
export class AddsiteComponent implements OnInit {

  site: Site = new Site();

  constructor(private siteService: SiteService,private router:Router, 
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  saveSite(){
    
    this.siteService.createSite(this.site).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    this.notificationService.success('! site ajouter avec success ');
    
  }

    goToSiteListe(){
     
      this.router.navigate(['/equi']);
    }
  
  createSite(){
    this.saveSite();
    this.goToSiteListe();
  }

}
