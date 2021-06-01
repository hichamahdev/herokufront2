import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Typeport } from './typeport';

@Injectable({
  providedIn: 'root'
})
export class TypeportService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/typeport";

  constructor(private httpclient:HttpClient) { 
  }

  getTypePortList(): Observable<Typeport[]> {
    return this.httpclient.get<Typeport[]>(`${this.baseURL}`);

  }
  
  createTypePort(typeport: Typeport): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, typeport);
  }


  getTypePortById(id:number): Observable<Typeport>{
    return this.httpclient.get<Typeport>(`${this.baseURL}/${id}`);
  }

  

  updateTypePort(id: number , typePort: Typeport):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, typePort);
  }

  deleteTypeport(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
