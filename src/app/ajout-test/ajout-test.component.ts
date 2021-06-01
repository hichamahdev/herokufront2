import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../region';
import { RegionService } from '../region.service';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-ajout-test',
  templateUrl: './ajout-test.component.html',
  styleUrls: ['./ajout-test.component.css']
})
export class AjoutTestComponent implements OnInit {
  
  sites: Site[] ;
  Region: Region [] ;
  region: Region = new Region() ;
  id_region: number;
  id_site: number;

  constructor(private siteservice: SiteService,
     private route: ActivatedRoute,
    private regionService: RegionService,
     private router:Router) { }

     ngOnInit(): void {
      this.id_region = this.route.snapshot.params['id'];
      this.getSites();
    }
  
    private getSites() {
      
      this.siteservice.getSitewithouRegionList().subscribe(data =>{this.sites=data
        console.log(this.sites[0].regionid)}    
       )      
      }
  
    ajouterSite(){
  
     this.regionService.addSite(this.id_region,this.id_site,this.region).subscribe(data =>{
      console.log(data);
    },
      
    error => console.log(error));
    this.router.navigate(['/equi']);
  
    }
    

}
