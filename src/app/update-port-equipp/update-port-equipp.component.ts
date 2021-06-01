import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortEquip } from '../port-equip';
import { PortEquipService } from '../port-equip.service';

@Component({
  selector: 'app-update-port-equipp',
  templateUrl: './update-port-equipp.component.html',
  styleUrls: ['./update-port-equipp.component.css']
})
export class UpdatePortEquippComponent implements OnInit {

  id:number;
  port:PortEquip = new PortEquip();

  constructor(private servicePortEquip: PortEquipService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servicePortEquip.getPortEquipById(this.id).subscribe(data => {
      this.port = data;
    },
    error => console.log(error));
   
  }
  updatePort(){
    this.servicePortEquip.updatePortEquip(this.id, this.port).subscribe(data => {
      this.goToPortList();
  },
  error => console.error());

}

goToPortList(){
  this.router.navigate(['/typeportequip']);
}

}
