import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arc } from './arc';
import { Region } from './region';

@Injectable({
  providedIn: 'root'
})
export class ArcService {
  private baseURL = "https://backendp2slink.herokuapp.com/api/auth/arc";
  private baseURLs = "https://backendp2slink.herokuapp.com/api/auth/arc/region"
  private baseURLss = "https://backendp2slink.herokuapp.com/api/auth/arc/anneau"

  constructor(private httpclient:HttpClient) { }


  getArcList(): Observable<Arc[]> {
    return this.httpclient.get<Arc[]>(`${this.baseURL}`,);
  }

  
 
  
  createArc(arc: Arc ): Observable<Object>{
    
    return this.httpclient.post(`${this.baseURL}`,arc );
  }

  getArctById(id:number): Observable<Arc>{
    return this.httpclient.get<Arc>(`${this.baseURL}/${id}`);
  }

  
  updateArc(id: number , arc: Arc):Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, arc);
  }

  deleteArc(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

  addRegion(idArc: number , idRegion: number, arc: Arc): Observable<Object>{
    return this.httpclient.post<Arc>(`${this.baseURL}/${idArc}/${idRegion}`, arc);

  }

  addAnneau(idArc: number , idAnneau: number, arc: Arc): Observable<Object>{
    return this.httpclient.post<Arc>(`${this.baseURLss}/${idArc}/${idAnneau}`, arc);

  }

  AddRegionAnneaiArc(idArc: number , idRegion: number, idAnneau: number, idEquip: number, idSlot: number, idPort: number, arc: Arc){
    return this.httpclient.post<Arc>(`${this.baseURL}/${idArc}/${idRegion}/${idAnneau}/${idEquip}/${idSlot}/${idPort}`, arc);

  }
}
