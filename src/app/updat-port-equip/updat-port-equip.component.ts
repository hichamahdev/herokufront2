import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortEquip } from '../port-equip';
import { PortEquipService } from '../port-equip.service';

@Component({
  selector: 'app-updat-port-equip',
  templateUrl: './updat-port-equip.component.html',
  styleUrls: ['./updat-port-equip.component.css']
})
export class UpdatPortEquipComponent implements OnInit {

  id: number;
  port: PortEquip = new PortEquip();

  constructor(private servicePort: PortEquipService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servicePort.getPortEquipById(this.id).subscribe(data => {
      this.port = data;
    },
    error => console.log(error));
   
  
  }

  updatePort(){
    this.servicePort.updatePortEquip(this.id, this.port).subscribe(data => {
        this.goToPortList();
    },
    error => console.error());

  }

  goToPortList(){
    this.router.navigate(['/typeportequip']);
}

}
