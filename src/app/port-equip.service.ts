import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortEquip } from './port-equip';

@Injectable({
  providedIn: 'root'
})
export class PortEquipService {

  

  private baseUrl= "https://backendp2slink.herokuapp.com/api/v1/portequip";

  constructor(private httpclient:HttpClient) { }

  getPortsEquipList(): Observable<PortEquip[]> {
    return this.httpclient.get<PortEquip[]>(`${this.baseUrl}`);

  }

  createPortEquip(portEquip: PortEquip): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, portEquip);
  }

  getPortEquipById(id:number): Observable<PortEquip>{
    return this.httpclient.get<PortEquip>(`${this.baseUrl}/${id}`);
  }

  updatePortEquip(id: number , portEquip:PortEquip):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, portEquip);
  }

  deletePortEquip(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
