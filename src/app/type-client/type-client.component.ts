import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AjouterServiceeComponent } from '../ajouter-servicee/ajouter-servicee.component';
import { ClientService } from '../client.service';
import { Clientt } from '../clientt';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-type-client',
  templateUrl: './type-client.component.html',
  styleUrls: ['./type-client.component.css']
})
export class TypeClientComponent implements OnInit {
  client: Clientt[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nomClient','reference', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  constructor(private clientservice: ClientService,
    private router:Router,
    
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getClient();
    
    console.log(this.listData);

  }
  private getClient() {
    this.clientservice.getClientList().subscribe(data => {
            this.client = data;
            this.listData = new MatTableDataSource(this.client);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
            
            
      console.log(this.client);
      
    }
 
    )
  }

  deleteClient(id: number){

   /* this.clientservice.deleteClient(id).subscribe(data => {
      console.log(data);
      this.getClient();
    })*/
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer ce client ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.clientservice.deleteClient(id).subscribe(data => {
          
          this.getClient();
        })
         this.notificationService.warn('! supprimer avec succes '); 

      }
      
    })

 
  }

 
    
    ajouterService(id:number){
      this.router.navigate(['/ajouterservice', id]) ;
    }
    
  

    onSearchClear(){
      this.searchKey="";
      this.applyFilter();

    }

    applyFilter(){
      this.listData.filter = this.searchKey.trim().toLowerCase();

    }

}
