import { Injectable } from '@angular/core';
//import { CONTACTOS } from '../utils/contactos.json';
import {  Contacto } from "../Clases/Contacto";
import {  of, Observable } from "rxjs";
import {  HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private urlEndPoint:string = 'http://localhost:8080/api/personas';
  private httpHeaders = new HttpHeaders({'content-type': 'application/json'}) 


  constructor(private http:HttpClient) { }

  getContactos():Observable<Contacto[]>{
    //return of(CONTACTOS);
   //return this.http.get<Contacto[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Contacto[])
    );
  }
  getContacto(id):Observable<Contacto>{
    //return of(CONTACTOS);
   //return this.http.get<Contacto[]>(this.urlEndPoint);
    return this.http.get<Contacto>(`${this.urlEndPoint}/${id}`);
  }
  create(contacto:Contacto):Observable<Contacto>{
  return this.http.post<Contacto>(this.urlEndPoint,contacto,{headers:this.httpHeaders});
  }
  update(contacto:Contacto):Observable<Contacto>{
    return this.http.put<Contacto>(`${this.urlEndPoint}/${contacto.id}`,contacto,{headers:this.httpHeaders});
  }
  delete(id:number):Observable<Contacto>{
    return this.http.delete<Contacto>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
  }
}