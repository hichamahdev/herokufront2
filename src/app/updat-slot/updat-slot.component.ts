import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Slot } from '../slot';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-updat-slot',
  templateUrl: './updat-slot.component.html',
  styleUrls: ['./updat-slot.component.css']
})
export class UpdatSlotComponent implements OnInit {
  
  id:number;
  slott: Slot = new Slot();

  constructor(private serviceSlot : SlotService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serviceSlot.getSlotById(this.id).subscribe(data => {
      this.slott = data;
    },
    error => console.log(error));
   
  }

  updateSlot(){
    this.serviceSlot.updateSlot(this.id, this.slott).subscribe(data => {
      this.goToSlotList();
  },
  error => console.error());
  console.log(this.slott.equipement_id)
  }

  goToSlotList(){
    this.router.navigate(['/configuslot',this.slott.equipement_id]) ;

  }

}
