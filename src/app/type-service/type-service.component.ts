import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.css']
})
export class TypeServiceComponent implements OnInit {
  service: Servicee[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['reference','nomService','typeService','action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private serviceeservice: ServiceeService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getService();
  }

  private getService() {
    this.serviceeservice.getServiceList().subscribe(data => {
            this.service = data;
            this.listData = new MatTableDataSource(this.service);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
            
            
      console.log(this.service);
      
    }
 
    )
  }

  deleteService(id: number){
   
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer ce service ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.serviceeservice.deleteService(id).subscribe(data => {
          console.log(data);
          this.getService();
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
  

}
