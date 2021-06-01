import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anneau } from './anneau';
import { Region } from './region';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/region";
  private baseURLs = "https://backendp2slink.herokuapp.com/api/auth/region/anneau";

  constructor(private httpclient:HttpClient) { }

  getRegionList(): Observable<Region[]> {
    return this.httpclient.get<Region[]>(`${this.baseURL}`);

  }
  createRegion(region: Region): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, region);
  }


  getRegionById(id:number): Observable<Region>{
    return this.httpclient.get<Region>(`${this.baseURL}/${id}`);
  }

  addSite(idRegion: number , idSite: number , region: Region ): Observable<Object>{
    return this.httpclient.post<Region>(`${this.baseURL}/${idRegion}/${idSite}`, region );

  }

  updateRegion(id: number , region: Region):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, region);
  }

  deleteRegion(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

  getAnneauByRegion(id: number): Observable<Anneau[]> {
    return this.httpclient.get<Anneau[]>(`${this.baseURLs}/${id}`);

  }

}
