import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Port } from '../port';
import { ServicePortService } from '../service-port.service';
import { Typeport } from '../typeport';
import { TypeportService } from '../typeport.service';

@Component({
  selector: 'app-update-port',
  templateUrl: './update-port.component.html',
  styleUrls: ['./update-port.component.css']
})
export class UpdatePortComponent implements OnInit {

  id:number;
  port:Port = new Port();
  typeports: Typeport[];

  constructor(private servicePort:ServicePortService,
    private route: ActivatedRoute,
    private router: Router,
    private typeportService: TypeportService
    ) { }

  ngOnInit(): void {
    this.getTypePort();
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
    console.log(this.port)
   // this.router.navigate(['/detailecarte',this.port.carteid]);
   this.router.navigate(['/typecarte']);
     
}

private getTypePort() {
  this.typeportService.getTypePortList().subscribe(data => {
          this.typeports = data;

  })}

}
