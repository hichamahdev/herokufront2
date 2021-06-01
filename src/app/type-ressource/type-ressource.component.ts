import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';
import { Ressource } from '../ressource';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-type-ressource',
  templateUrl: './type-ressource.component.html',
  styleUrls: ['./type-ressource.component.css']
})
export class TypeRessourceComponent implements OnInit {

  ressource: Ressource[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nom','nombre','type', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private ressourceService: RessourceService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getRessources();
    console.log(this.ressource);
  }

  private getRessources() {
    this.ressourceService.getRessourceList().subscribe(data => {
      this.ressource = data;
      this.listData = new MatTableDataSource(this.ressource);
             this.listData.sort = this.sort;
             this.listData.paginator = this.paginator;

             console.log(this.ressource);
      
    }
 
    )
  }
 
   updateRessource(id: number){
     this.router.navigate(['/updateressource', id]) ;
  }
 

 
  deleteRessource(id:number){
    
 
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer ce client ?")
     .afterClosed().subscribe(res =>{
       if(res){
         this.ressourceService.deleteRessource(id).subscribe(data => {
           console.log(data);
           this.getRessources();
         })
        
          this.notificationService.warn('! supprimer avec succes '); 
 
       }
       
     })
 
 
  }
 
  afficherDetails(id:number){
   this.router.navigate(['/detailequip', id]) ;
  }
 

 
  onSearchClear(){
   this.searchKey="";
   this.applyFilter();
 
 }
 
 applyFilter(){
   this.listData.filter = this.searchKey.trim().toLowerCase();
 
 }

}
