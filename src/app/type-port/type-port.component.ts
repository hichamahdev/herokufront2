import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Port } from '../port';
import { ServicePortService } from '../service-port.service';

@Component({
  selector: 'app-type-port',
  templateUrl: './type-port.component.html',
  styleUrls: ['./type-port.component.css']
})
export class TypePortComponent implements OnInit {

  ports: Port[];
  constructor(private servicePort:ServicePortService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getPorts();
  }
  private getPorts(){
    this.servicePort.getPortsList().subscribe(data => {
      this.ports = data;
    });
  }
  updatePort(id: number){
    this.router.navigate(['/updateportt', id]) ;
 }

 deletePort(id:number){
  this.servicePort.deletePort(id).subscribe(data => {
    console.log(data);
    this.getPorts();
  })

}

}
