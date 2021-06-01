import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carte } from './carte';
import { Slot } from './slot';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/slot";
  private baseURLs = "https://backendp2slink.herokuapp.com/api/auth/slot/carte";


  constructor(private httpclient:HttpClient) { }

  getSlotList(): Observable<Slot[]> {
    return this.httpclient.get<Slot[]>(`${this.baseURL}`);

  }
  
  createSlot(slot: Slot): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, slot);
  }


  getSlotById(id:number): Observable<Slot>{
    return this.httpclient.get<Slot>(`${this.baseURL}/${id}`);
  }

  addCarte(idSlot: number , idCarte: number, slot: Slot): Observable<Object>{

    
    return this.httpclient.post<Slot>(`${this.baseURL}/${idSlot}/${idCarte}`, slot);

  }

  updateSlot(id: number , slot: Slot):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, slot);
  }

  deleteSlot(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

  getCarteBySlot(id: number): Observable<Carte> {
    return this.httpclient.get<Carte>(`${this.baseURLs}/${id}`);

  }


}
