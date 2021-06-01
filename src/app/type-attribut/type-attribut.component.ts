import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Attribut } from '../attribut';
import { AttributService } from '../attribut.service';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-type-attribut',
  templateUrl: './type-attribut.component.html',
  styleUrls: ['./type-attribut.component.css']
})
export class TypeAttributComponent implements OnInit {
  ptattach: String;
  attribut: Attribut[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nomtype','pntattach', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private attributService: AttributService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAttribut();
  }

  private getAttribut() {
    this.attributService.getAttributList().subscribe(data => {
      this.attribut = data;
      this.listData = new MatTableDataSource(this.attribut);
             this.listData.sort = this.sort;
             this.listData.paginator = this.paginator;

             console.log(this.attribut);
      
    }
 
    )
  }
 
   updateAttribut(id: number){
     this.router.navigate(['/updateattribut', id]) ;
  }
 

 
  deleteAttribut(id:number){
    
 
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer cet Attribut ?")
     .afterClosed().subscribe(res =>{
       if(res){
         this.attributService.deleteAttribut(id).subscribe(data => {
           console.log(data);
           this.getAttribut();
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
