import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attribut } from '../attribut';
import { AttributService } from '../attribut.service';
import { Carte } from '../carte';
import { CarteService } from '../carte.service';
import { ClientService } from '../client.service';
import { Clientt } from '../clientt';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { NotificationService } from '../notification.service';
import { Port } from '../port';
import { Region } from '../region';
import { ServicePortService } from '../service-port.service';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';
import { Site } from '../site';

@Component({
  selector: 'app-addattribut',
  templateUrl: './addattribut.component.html',
  styleUrls: ['./addattribut.component.css']
})
export class AddattributComponent implements OnInit {
  attribut: Attribut = new Attribut();
  equipements: Equipement[];
  carte: Carte[];
  service: Servicee[];
  client: Clientt[];
  region: Region[];
  site: Site[];
  ports: Port[];


  constructor(private attributService: AttributService,
    private router:Router,
    private notificationService: NotificationService,
    private equipementService:EquipementService,
    private carteservice: CarteService,
    private clientservice: ClientService,
    private serviceeservice: ServiceeService,
    private servicePort:ServicePortService,) { }

  ngOnInit(): void {
    this.getEquipements();
    this.getCartes();
    this.getService();
    this.getClient();
    this.getPorts();
  }

  saveAttribut(){
    this.attributService.createAttribut(this.attribut).subscribe(data =>{
      console.log(data);
      
    },
      
    error => console.log(error));
    this.notificationService.success('! attribut ajouter avec success ');
      
  }

  goToAttributList(){
      this.router.navigate(['/attribut']);
  }

  createAttribut(){
    console.log(this.attribut);
    this.saveAttribut();
    this.goToAttributList();
  }

  private getEquipements() {
    this.equipementService.getEquipementList().subscribe(data => {
      this.equipements = data; 
    } ) }

    private getCartes() {
      this.carteservice.getCarteList().subscribe(data => {
              this.carte = data;            
      })}

      private getService() {
        this.serviceeservice.getServiceList().subscribe(data => {
                this.service = data;
 
        })}

        private getClient() {
          this.clientservice.getClientList().subscribe(data => {
                  this.client = data;      
            console.log(this.client);
                    })   }

         private getPorts(){
                      this.servicePort.getPortsList().subscribe(data => {
                        this.ports = data;
                      });
                    }            

}
