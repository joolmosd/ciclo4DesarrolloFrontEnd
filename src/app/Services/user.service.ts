import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Class Entities/user/user';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private securityService: SecurityService) { 

      this.token = this.securityService.getToken();
    }
    
    store(usuario: User): Observable<User> {
      return this.http.post<User>(`${this.url}/usuarios`, {
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        telefono: usuario.telefono,
        correo: usuario.correo
      });
    }

    getAll(): Observable<User[]>{
      return this.http.get<User[]>(`${this.url}/usuarios`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }


    update(usuario: User): Observable<User> {
      return this.http.put<User>(`${this.url}/usuarios/${usuario.id}`, {
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        telefono: usuario.telefono,
        correo: usuario.correo
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }


    delete(id: string): Observable<User[]>{
      return this.http.delete<User[]>(`${this.url}/usuarios/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }


    getWithId(id: string): Observable<User>{
      return this.http.get<User>(`${this.url}/usuarios/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }



}

