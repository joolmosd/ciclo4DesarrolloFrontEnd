import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../Class Entities/service/service';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private securityService: SecurityService) {

    this.token = this.securityService.getToken();
   }

  store(service: Service): Observable<Service> {
    return this.http.post<Service>(`${this.url}/services`, {
      date: service.date,
      time: service.time,
      value: service.value,
      origin: service.origin,
      destiny: service.destiny,
      entrust: service.entrust
    });
  }

  getAll(): Observable<Service[]>{
    return this.http.get<Service[]>(`${this.url}/services`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }


  update(service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.url}/services/${service.id}`, {
      date: service.date,
      time: service.time,
      value: service.value,
      origin: service.origin,
      destiny: service.destiny,
      entrust: service.entrust
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }


  delete(id: string): Observable<Service[]>{
    return this.http.delete<Service[]>(`${this.url}/services/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }


  getWithId(id: string): Observable<Service>{
    return this.http.get<Service>(`${this.url}/users/${id}`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }


}
