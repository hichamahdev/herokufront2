import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Port } from '../port';
import { ServicePortService } from '../service-port.service';

@Component({
  selector: 'app-update-portt',
  templateUrl: './update-portt.component.html',
  styleUrls: ['./update-portt.component.css']
})
export class UpdatePorttComponent implements OnInit {

  id:number;
  port:Port = new Port();

  constructor(private servicePort:ServicePortService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servicePort.getPortById(this.id).subscribe(data => {
      this.port = data;
    },
    error => console.log(error));
   
  }

  updatePort(){
    this.servicePort.updatePort(this.id, this.port).subscribe(data => {
        this.goToPortList();
    },
    error => console.error());

  }

  goToPortList(){
    this.router.navigate(['typeport']);
}


}
