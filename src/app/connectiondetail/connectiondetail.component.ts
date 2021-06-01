import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arc } from '../arc';
import { ArcService } from '../arc.service';

@Component({
  selector: 'app-connectiondetail',
  templateUrl: './connectiondetail.component.html',
  styleUrls: ['./connectiondetail.component.css']
})
export class ConnectiondetailComponent implements OnInit {
  id_arc: number;
  Arc: Arc = new Arc();

  constructor(private route: ActivatedRoute,
    private arcService: ArcService,
    private router:Router) { }

  ngOnInit(): void {
    this.id_arc = this.route.snapshot.params['id'];
  }

  getArc(){
    this.arcService.getArctById(this.id_arc).subscribe(data => {
      this.Arc = data;
      console.log(this.Arc);
    }
      )
  }

}
