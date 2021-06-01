import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listecnx } from './listecnx';

@Injectable({
  providedIn: 'root'
})
export class ListconnectionService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/listcnx";

  constructor(private httpclient:HttpClient) { 
  }

  getListecnxList(): Observable<Listecnx[]> {
    return this.httpclient.get<Listecnx[]>(`${this.baseURL}`);

  }
  
  createListecnx(listecnx: Listecnx): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, listecnx);
  }


  getListecnxById(id:number): Observable<Listecnx>{
    return this.httpclient.get<Listecnx>(`${this.baseURL}/${id}`);
  }

  

  updateListecnx(id: number , listecnx: Listecnx):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, listecnx);
  }

  deleteListecnx(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
