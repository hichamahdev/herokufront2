import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-detail-site',
  templateUrl: './detail-site.component.html',
  styleUrls: ['./detail-site.component.css']
})
export class DetailSiteComponent implements OnInit {
  site: Site;
  id: number;

  constructor(private route: ActivatedRoute,
    private siteService: SiteService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.site = new Site();

    this.siteService.getSitetById(this.id).subscribe(data => {
      this.site = data ;
      console.log(this.site);
    });
  }

}