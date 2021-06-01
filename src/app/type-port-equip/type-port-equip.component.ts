import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';
import { PortEquip } from '../port-equip';
import { PortEquipService } from '../port-equip.service';

@Component({
  selector: 'app-type-port-equip',
  templateUrl: './type-port-equip.component.html',
  styleUrls: ['./type-port-equip.component.css']
})
export class TypePortEquipComponent implements OnInit {

  ports: PortEquip[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nomPort','servicePort', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private servicePort:PortEquipService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getPorts();
  }
  private getPorts(){
    this.servicePort.getPortsEquipList().subscribe(data => {
      this.ports = data;
      this.listData = new MatTableDataSource(this.ports);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
    });
  }

  updatePort(id:number){
    
    this.router.navigate(['/updateportequipe', id]) ;

  }
  deletePort(id:number){
    
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer ce client ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.servicePort.deletePortEquip(id).subscribe(data => {
          console.log(data);
          this.getPorts();
        })
       
         this.notificationService.warn('! supprimer avec succes '); 

      }
      
    })
  }

  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  
  }
  
  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  
  }

  afficherDetails(id:number){
    
  }

}
