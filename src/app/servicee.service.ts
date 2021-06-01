import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Servicee } from './servicee';

@Injectable({
  providedIn: 'root'
})
export class ServiceeService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/service";

  constructor(private httpclient:HttpClient) { }

  getServiceList(): Observable<Servicee[]> {
    return this.httpclient.get<Servicee[]>(`${this.baseURL}`);

  }
  
  createService(service: Servicee): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, service);
  }


  getServiceById(id:number): Observable<Servicee>{
    return this.httpclient.get<Servicee>(`${this.baseURL}/${id}`);
  }

  

  updateService(id: number , service: Servicee ):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, service);
  }

  deleteService(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
