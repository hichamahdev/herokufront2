import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Clientt } from '../clientt';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-ajouter-servicee',
  templateUrl: './ajouter-servicee.component.html',
  styleUrls: ['./ajouter-servicee.component.css']
})
export class AjouterServiceeComponent implements OnInit {

  services: Servicee [] ;
  Client: Clientt[] ;  
  
  client: Clientt = new Clientt() ;
  id_service: number;
  id_client: number;

  constructor(private clientservice: ClientService,
    private route: ActivatedRoute,
    private servService: ServiceeService,
     private router:Router) { }

     ngOnInit(): void {
      this.id_client = this.route.snapshot.params['id'];
      this.getServices();
    }
  
    private getServices() {
      
      this.servService.getServiceList().subscribe(data => {
        this.services = data;
        
        
  
  
}

)
        }
      
  
      ajouterService(){
  
     this.clientservice.addService(this.id_client,this.id_service,this.client).subscribe(data =>{
      console.log(data);
    },
      
    error => console.log(error));
    this.router.navigate(['/typeclient']);
  
    }
    
    

}
