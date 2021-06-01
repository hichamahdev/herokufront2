import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.css']
})
export class AjoutServiceComponent implements OnInit {

  service: Servicee = new Servicee();


  constructor(private serviceService: ServiceeService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveService(){
    this.serviceService.createService(this.service).subscribe(data =>{
      console.log(data);
      
    },
      
    error => console.log(error));
      
  }

  goToServiceList(){
      this.router.navigate(['/typeservice']);
  }

  createService(){
    console.log(this.service);
    this.saveService();
    this.goToServiceList();
  }


}
