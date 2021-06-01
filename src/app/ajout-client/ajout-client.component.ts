import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Clientt } from '../clientt';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  client: Clientt = new Clientt();


  constructor(private clientService: ClientService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.clientService.createClient(this.client).subscribe(data =>{
      console.log(data);
      
    },
      
    error => console.log(error));
      
  }

  goToClientList(){
      this.router.navigate(['/typeclient']);
  }

  createClient(){
    console.log(this.client);
    this.saveClient();
    this.goToClientList();
  }

}
