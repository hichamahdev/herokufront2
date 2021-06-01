import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressource } from './ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/ressource";

  constructor(private httpclient:HttpClient) { 
  }

  getRessourceList(): Observable<Ressource[]> {
    return this.httpclient.get<[]>(`${this.baseURL}`);

  }
  
  createRessource(ressource: Ressource): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, ressource);
  }


  getRessourceById(id:number): Observable<Ressource>{
    return this.httpclient.get<Ressource>(`${this.baseURL}/${id}`);
  }

  

  updateRessource(id: number , ressource: Ressource):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, ressource);
  }

  deleteRessource(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
