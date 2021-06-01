import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientt } from './clientt';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/client";

  constructor(private httpclient:HttpClient) { }

  getClientList(): Observable<Clientt[]> {
    return this.httpclient.get<Clientt[]>(`${this.baseURL}`);

  }
  
  createClient(client: Clientt): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, client);
  }


  getClientById(id:number): Observable<Clientt>{
    return this.httpclient.get<Clientt>(`${this.baseURL}/${id}`);
  }

  addService(idClient: number , idService: number , client: Clientt ): Observable<Object>{
    return this.httpclient.post<Clientt>(`${this.baseURL}/${idClient}/${idService}`, client );

  }

  

  updateClient(id: number , client: Clientt ):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
