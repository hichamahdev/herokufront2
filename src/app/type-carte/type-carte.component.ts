import { Component, OnInit, ViewChild } from '@angular/core';
import { Carte } from '../carte';
import { Port } from '../port';
import { CarteService } from '../carte.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-type-carte',
  templateUrl: './type-carte.component.html',
  styleUrls: ['./type-carte.component.css']
})
export class TypeCarteComponent implements OnInit {

  carte: Carte[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nomCarte','typeCarte', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  
  

  constructor(private carteservice: CarteService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.getCartes();
  }

  private getCartes() {
    this.carteservice.getCarteList().subscribe(data => {
            this.carte = data;
            
            this.listData = new MatTableDataSource(this.carte);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
            
    })}

  updateCarte(id:number){
    this.router.navigate(['/updatecartee', id]) ;
  }

  afficheCarte(id:number){
    this.router.navigate(['/detailecarte', id]) ;

  }

  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  
  }
  
  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  
  }
  deleteCarte(id:number){
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer cet Carte ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.carteservice.deleteCarte(id).subscribe(data => {
          console.log(data);
          this.getCartes();
        })
       
         this.notificationService.warn('! supprimer avec succes '); 

      }
      
    })
  }


}
