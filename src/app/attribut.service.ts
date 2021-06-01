import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribut } from './attribut';


@Injectable({
  providedIn: 'root'
})
export class AttributService {
  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/attribut";

  constructor(private httpclient:HttpClient) { 
  }

  getAttributList(): Observable<Attribut[]> {
    return this.httpclient.get<[]>(`${this.baseURL}`);

  }
  
  createAttribut(attribut: Attribut): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, attribut);
  }


  getAttributById(id:number): Observable<Attribut>{
    return this.httpclient.get<Attribut>(`${this.baseURL}/${id}`);
  }

  

  updateAttribut(id: number , attribut: Attribut):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, attribut);
  }

  deleteAttribut(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
