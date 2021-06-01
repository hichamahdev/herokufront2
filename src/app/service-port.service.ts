import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Port } from './port';

@Injectable({
  providedIn: 'root'
})
export class ServicePortService {

  private baseUrl= "https://backendp2slink.herokuapp.com/api/auth/port";
  constructor(private httpclient:HttpClient) { }

  getPortsList(): Observable<Port[]> {
    return this.httpclient.get<Port[]>(`${this.baseUrl}`);

  }

  createPort(port: Port): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, port);
  }

  getPortById(id:number): Observable<Port>{
    return this.httpclient.get<Port>(`${this.baseUrl}/${id}`);
  }

  updatePort(id: number , port:Port):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, port);
  }

  deletePort(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }

}
