import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anneau } from './anneau';
import { Equipement } from './equipement';

@Injectable({
  providedIn: 'root'
})
export class AnneauService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/anneau";
  private baseURLs = "https://backendp2slink.herokuapp.com/api/auth/anneau/equipement";


  constructor(private httpclient:HttpClient) { }


  getAnneauList(): Observable<Anneau[]> {
    return this.httpclient.get<Anneau[]>(`${this.baseURL}`,);
  }

  addEquip(idAnneau: number , idEquip: number , anneau: Anneau ): Observable<Object>{
    return this.httpclient.post<Anneau>(`${this.baseURL}/${idAnneau}/${idEquip}`, anneau );

  }
 
 

  createAnneau(anneau: Anneau ): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, anneau);
  }

  getAnneautById(id:number): Observable<Anneau>{
    return this.httpclient.get<Anneau>(`${this.baseURL}/${id}`);
  }

  
  updateAnneau(id: number , anneau: Anneau):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, anneau);
  }

  deleteAnneau(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

  getEquipementByAnneau(id: number): Observable<Equipement[]> {
    return this.httpclient.get<Equipement[]>(`${this.baseURLs}/${id}`);

  }
}
