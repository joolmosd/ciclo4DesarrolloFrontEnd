import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrust } from '../Class Entities/entrust/entrust';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class EntrustService {

  url = "https://backendamazon.herokuapp.com"
  token: string = ''

  constructor(private http: HttpClient,
    private securityService: SecurityService) { 
      this.token = this.securityService.getToken();
    }

    store(entrust: Entrust): Observable<Entrust> {
      return this.http.post<Entrust>(`${this.url}/entrusts`, {
  
        description:entrust.description,
        size:entrust.size,
        type:entrust.type,
        presentation:entrust.presentation
      });
    }

    update(entrust: Entrust): Observable<Entrust> {
      return this.http.put<Entrust>(`${this.url}/entrusts/${entrust.id}`, {
        description: entrust.description,
        size: entrust.size,
        type: entrust.type,
        presentation: entrust.presentation
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }


    delete(id: string): Observable<Entrust[]>{
      return this.http.delete<Entrust[]>(`${this.url}/entrusts/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }


    getWithId(id: string): Observable<Entrust>{
      return this.http.get<Entrust>(`${this.url}/entrusts/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }


  getAll(): Observable<Entrust[]>{
    return this.http.get<Entrust[]>(`${this.url}/entrusts`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }
}
