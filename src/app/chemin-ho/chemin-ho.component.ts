import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Arc } from '../arc';
import { ArcService } from '../arc.service';
import { DialogService } from '../dialog.service';
import { NotificationService } from '../notification.service';
import { Region } from '../region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-chemin-ho',
  templateUrl: './chemin-ho.component.html',
  styleUrls: ['./chemin-ho.component.css']
})
export class CheminHoComponent implements OnInit {

  regions: Region[];
  arc: Arc[];

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nom','equipementA','portA','PortB','equipementB','PortB','action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchKey: string;

  constructor(private RegionService: RegionService,
    private arcService: ArcService,
    private router:Router,
    private dialogService: DialogService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getArc();
  }

  private getArc() {
    this.arcService.getArcList().subscribe(data => {
      this.arc = data;
      this.listData = new MatTableDataSource(this.arc);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      
    }
 
    )
  }
  detail(id: number){
    this.router.navigate(['/connectiondetail', id]) ;
  }
  ajouterArc(id:number){
    this.router.navigate(['/ajoutersite', id]) ;
  }

  deleteArc(id:number){
  
    this.dialogService.openConfirmDialog("Voulez-vous Supprimer cet Arc ?")
    .afterClosed().subscribe(res =>{
      if(res){
        this.arcService.deleteArc(id).subscribe(data => {
          console.log(data);
          this.getArc();
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

  ajouterregion(id:number){

    this.router.navigate(['/ajouterarc',id]);
  }

  ajouterregionn(id:number){
    this.router.navigate(['ajouterarcc',id]);
  }


}
