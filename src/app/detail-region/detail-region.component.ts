import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../region';
import { RegionService } from '../region.service';
import { Site } from '../site';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.component.html',
  styleUrls: ['./detail-region.component.css']
})
export class DetailRegionComponent implements OnInit {

  region: Region;
  id: number;
  


  constructor(private route: ActivatedRoute,
    private regionService: RegionService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.region = new Region();

    this.regionService.getRegionById(this.id).subscribe(data => {
      this.region = data ;
      console.log(this.region);
    });
  }

}
