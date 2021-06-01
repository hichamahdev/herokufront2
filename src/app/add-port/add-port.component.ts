import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Port } from '../port';
import { ServicePortService } from '../service-port.service';

@Component({
  selector: 'app-add-port',
  templateUrl: './add-port.component.html',
  styleUrls: ['./add-port.component.css']
})
export class AddPortComponent implements OnInit {
  idCarte:number;
  port: Port = new Port();

  constructor(private portservice: ServicePortService,
    private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.idCarte = this.route.snapshot.params['id'];
  }

  savePort(){
    this.port.carteid = this.idCarte;
    this.portservice.createPort(this.port).subscribe(data =>{
      console.log(data);
      this.goToPort();
    },
    erroe => console.error());
    
  }
  goToPort(){
    this.router.navigate(['/detailecarte',this.idCarte]);
}

  createPort(){
    console.log(this.port);
    this.savePort();
    this.goToPort();

  }

}
