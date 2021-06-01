
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogService } from '../dialog.service';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-type-equip',
  templateUrl: './type-equip.component.html',
  styleUrls: ['./type-equip.component.css']
})
export class TypeEquipComponent implements OnInit {

  equipements: Equipement[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nomSupEquip','nomEquip','categorieEquip','numbSlot', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private equipementService:EquipementService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.getEquipements();
  }

 private getEquipements() {
   this.equipementService.getEquipementList().subscribe(data => {
     this.equipements = data;
     this.listData = new MatTableDataSource(this.equipements);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
     
   }

   )
 }

  updateEquipement(id: number){
    this.router.navigate(['/updateequip', id]) ;
 }

 ConfigurerSlot(id: number){
  this.router.navigate(['/configuslot', id]) ;
 }

 deleteEquipement(id:number){
   

   this.dialogService.openConfirmDialog("Voulez-vous Supprimer ce client ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.equipementService.deleteEquipement(id).subscribe(data => {
          console.log(data);
          this.getEquipements();
        })
       
         this.notificationService.warn('! supprimer avec succes '); 

      }
      
    })


 }

 afficherDetails(id:number){
  this.router.navigate(['/detailequip', id]) ;
 }

 ajouterCarte(id:number){
 
  this.router.navigate(['/ajoutercarte', id]) ;
 }

 onSearchClear(){
  this.searchKey="";
  this.applyFilter();

}

applyFilter(){
  this.listData.filter = this.searchKey.trim().toLowerCase();

}

}
