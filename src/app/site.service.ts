import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from './site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/site";
  private baseURLs = "https://backendp2slink.herokuapp.com/api/auth/site/region";

  constructor(private httpclient:HttpClient) { }


  getSiteList(): Observable<Site[]> {
    return this.httpclient.get<Site[]>(`${this.baseURL}`,);
  }

  addEquip(idSite: number , idEquip: number , site: Site ): Observable<Object>{
    return this.httpclient.post<Site>(`${this.baseURL}/${idSite}/${idEquip}`, site );

  }
 
  getSitewithouRegionList(): Observable<Site[]> {
    return this.httpclient.get<Site[]>(`${this.baseURLs}`,);
  }

  createSite(site: Site ): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, site);
  }

  getSitetById(id:number): Observable<Site>{
    return this.httpclient.get<Site>(`${this.baseURL}/${id}`);
  }

  
  updateSite(id: number , site: Site):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, site);
  }

  deleteSite(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
