import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Class Entities/client/client';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private securityService: SecurityService) { 
    this.token = this.securityService.getToken();
  }

  store(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/clients`, {

      identification:client.identification,
      name:client.name,
      lastNames:client.lastNames,
      phone:client.phone,
      email:client.email,
      country:client.country,
      city:client.city,
      departament:client.departament,
      address:client.address
    });
  }

  getAll(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.url}/clients`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }


  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/clients/${client.id}`, {

      identification:client.identification,
      name:client.name,
      lastNames:client.lastNames,
      phone:client.phone,
      email:client.email,
      country:client.country,
      city:client.city,
      departament:client.departament,
      addres:client.address
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }


  delete(id: string): Observable<Client[]>{
    return this.http.delete<Client[]>(`${this.url}/clients/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }


  getWithId(id: string): Observable<Client>{
    return this.http.get<Client>(`${this.url}/Clients/${id}`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    })
  }




}
