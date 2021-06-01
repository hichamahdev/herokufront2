import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TypeEquipComponent } from './type-equip/type-equip.component';
import { TypePortComponent } from './type-port/type-port.component';
import { TypeCarteComponent } from './type-carte/type-carte.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEquipComponent } from './add-equip/add-equip.component';
import {FormsModule} from '@angular/forms';
import { UpdatEquipComponent } from './updat-equip/updat-equip.component';
import { DetailEquipComponent } from './detail-equip/detail-equip.component';
import { ConfigurerSlotComponent } from './configurer-slot/configurer-slot.component';
import { AddPortComponent } from './add-port/add-port.component';
import { UpdatePortComponent } from './update-port/update-port.component';

import { DetailCarteComponent } from './detail-carte/detail-carte.component';
import { UpdatePorttComponent } from './update-portt/update-portt.component';
import { TypePortEquipComponent } from './type-port-equip/type-port-equip.component';
import { AddPortEquipComponent } from './add-port-equip/add-port-equip.component';
import { UpdatPortEquipComponent } from './updat-port-equip/updat-port-equip.component';
import { UpdatePortEquippComponent } from './update-port-equipp/update-port-equipp.component';
import { LoginComponent } from './login/login.component';

import { AdminComponent } from './user/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { PmComponent } from './user/pm/pm.component';
import { SignupInfoComponent } from './signup-info/signup-info.component';
import { TypeConnectionComponent } from './type-connection/type-connection.component';
import { RecherchelienComponent } from './menu/recherchelien/recherchelien.component';
import { EquipComponent } from './menu/equip/equip.component';
import { RessourceComponent } from './menu/ressource/ressource.component';

import { AddCarteComponent } from './add-carte/add-carte.component';
import { AjoutCarteComponent } from './ajout-carte/ajout-carte.component';
import { RegionComponent } from './region/region.component';
import { SiteComponent } from './site/site.component';
import { AddregionComponent } from './addregion/addregion.component';
import { DetailRegionComponent } from './detail-region/detail-region.component';
import { AddsiteComponent } from './addsite/addsite.component';
import { AjoutTestComponent } from './ajout-test/ajout-test.component';
import { AjoutEquipComponent } from './ajout-equip/ajout-equip.component';
import { DetailSiteComponent } from './detail-site/detail-site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from './material/material.module';
import { UpdatSlotComponent } from './updat-slot/updat-slot.component';
import { TypeClientComponent } from './type-client/type-client.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { TypeServiceComponent } from './type-service/type-service.component';
import { AjoutServiceComponent } from './ajout-service/ajout-service.component';
import { AjouterServiceeComponent } from './ajouter-servicee/ajouter-servicee.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { AideComponent } from './aide/aide.component';
import { ManuelComponent } from './manuel/manuel.component';
import { ProposComponent } from './propos/propos.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';
import { TypeRessourceComponent } from './type-ressource/type-ressource.component';
import { AddressourceComponent } from './addressource/addressource.component';
import { UpdateressComponent } from './updateress/updateress.component';
import { Addportequip2Component } from './addportequip2/addportequip2.component';
import { TypeAttributComponent } from './type-attribut/type-attribut.component';
import { AddattributComponent } from './addattribut/addattribut.component';
import { UpdatattributComponent } from './updatattribut/updatattribut.component';
import { EquipcarteComponent } from './equipcarte/equipcarte.component';
import { ListconnectionComponent } from './listconnection/listconnection.component';
import { CheminHoComponent } from './chemin-ho/chemin-ho.component';
import { AjoutequipanneauComponent } from './ajoutequipanneau/ajoutequipanneau.component';
import { AjouteranneauComponent } from './ajouteranneau/ajouteranneau.component';
import { AddarcComponent } from './addarc/addarc.component';
import { ConnectiondetailComponent } from './connectiondetail/connectiondetail.component';
import { NomarcComponent } from './nomarc/nomarc.component';
import { AjoutersecondequipComponent } from './ajoutersecondequip/ajoutersecondequip.component';








const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tyepeequip', component: TypeEquipComponent },
  { path: 'updateequip/:id', component: UpdatEquipComponent },
  { path: 'configuslot/:id', component: ConfigurerSlotComponent },
  { path: 'detailequip/:id', component: DetailEquipComponent },
  { path: 'addequip', component: AddEquipComponent },
  { path: 'typecarte', component: TypeCarteComponent },
  { path: 'addcarte', component: AddCarteComponent },
  { path: 'ajoutercarte/:id', component: AjoutCarteComponent },
  
  { path: 'typeport', component: TypePortComponent },
  { path: 'addport/:id', component: AddPortComponent },
  { path: 'updateport/:id', component: UpdatePortComponent },
  
  { path: 'detailecarte/:id', component: DetailCarteComponent },
  { path: 'updateportt/:id', component: UpdatePorttComponent },
  { path: 'typeportequip', component: TypePortEquipComponent },
  { path: 'addportequip/:id', component: AddPortEquipComponent },
  { path: 'updateportequip/:id', component: UpdatPortEquipComponent },
  { path: 'user', component: UserComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'typeconection', component: TypeConnectionComponent },
  
  { path: 'admin',component: AdminComponent},
  { path: 'pm',component: PmComponent},
  { path: 'recherchelien', component: RecherchelienComponent },
  { path: 'equi', component: EquipComponent },
  
  
  { path: 'addregion', component: AddregionComponent },
  { path: 'detailregion/:id', component: DetailRegionComponent },
  { path: 'addsite', component: AddsiteComponent },
  { path: 'ajoutersite/:id', component: AjoutTestComponent },
  { path: 'ajouterequip/:id', component: AjoutEquipComponent },
  { path: 'detailsite/:id', component: DetailSiteComponent },
  { path: 'editslot/:id', component: UpdatSlotComponent },
  { path: 'typeclient', component: TypeClientComponent },
  { path: 'addclient', component: AjoutClientComponent },
  { path: 'typeservice', component: TypeServiceComponent },
  { path: 'addservice', component: AjoutServiceComponent },
  { path: 'ajouterservice/:id', component: AjouterServiceeComponent },
  { path: 'aide', component: AideComponent },
  { path: 'manuel', component: ManuelComponent },
  { path: 'propos', component: ProposComponent },
  { path: 'updatecartee/:id', component: UpdateCarteComponent },
  { path: 'ressource', component: TypeRessourceComponent },
  { path: 'addressourcee', component: AddressourceComponent },
  { path: 'updateressource/:id', component: UpdateressComponent },
  { path: 'addequipport', component: Addportequip2Component },
  { path: 'updateportequipe/:id', component: UpdatePortEquippComponent },
  { path: 'attribut', component: TypeAttributComponent },
  { path: 'addattribut', component: AddattributComponent },
  { path: 'updateattribut/:id', component: UpdatattributComponent },
  { path: 'typecarteequip', component: EquipcarteComponent },
  { path: 'listconnection', component: ListconnectionComponent },
  { path: 'connection', component: CheminHoComponent },
  { path: 'ajouterequipeanne/:id', component: AjoutequipanneauComponent },
  { path: 'ajouteranneau', component: AjouteranneauComponent },
  { path: 'ajouterarc/:id', component: AddarcComponent },
  { path: 'connectiondetail/:id', component: ConnectiondetailComponent },
  { path: 'ajoutterarc', component: NomarcComponent },
  { path: 'ajouterarcc/:id', component: AjoutersecondequipComponent },



  
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TypeEquipComponent,
    TypePortComponent,
    TypeCarteComponent,
    AddEquipComponent,
    UpdatEquipComponent,
    DetailEquipComponent,
    ConfigurerSlotComponent,
    AddPortComponent,
    UpdatePortComponent,
    
    DetailCarteComponent,
    UpdatePorttComponent,
    TypePortEquipComponent,
    AddPortEquipComponent,
    UpdatPortEquipComponent,
    UpdatePortEquippComponent,
    LoginComponent,
    
    AdminComponent,
    UserComponent,
    PmComponent,
    SignupInfoComponent,
    TypeConnectionComponent,
    RecherchelienComponent,
    EquipComponent,
    RessourceComponent,
    
    AddCarteComponent,
    AjoutCarteComponent,
    RegionComponent,
    SiteComponent,
    AddregionComponent,
    DetailRegionComponent,
    AddsiteComponent,
    AjoutTestComponent,
    AjoutEquipComponent,
    DetailSiteComponent,
    DataTableComponent,
    UpdatSlotComponent,
    TypeClientComponent,
    AjoutClientComponent,
    TypeServiceComponent,
    AjoutServiceComponent,
    AjouterServiceeComponent,
    MatDialogComponent,
    FooterComponent,
    AideComponent,
    ManuelComponent,
    ProposComponent,
    UpdateCarteComponent,
    TypeRessourceComponent,
    AddressourceComponent,
    UpdateressComponent,
    Addportequip2Component,
    TypeAttributComponent,
    AddattributComponent,
    UpdatattributComponent,
    EquipcarteComponent,
    ListconnectionComponent,
    CheminHoComponent,
    AjoutequipanneauComponent,
    AjouteranneauComponent,
    AddarcComponent,
    ConnectiondetailComponent,
    NomarcComponent,
    AjoutersecondequipComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
   MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatDialogComponent,AjouterServiceeComponent]
})
export class AppModule { }
