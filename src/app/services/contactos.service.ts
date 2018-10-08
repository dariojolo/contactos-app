import { Injectable } from '@angular/core';
//import { CONTACTOS } from '../utils/contactos.json';
import {  Contacto } from "../Clases/Contacto";
import {  of, Observable } from "rxjs";
import {  HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private urlEndPoint:string = 'http://localhost:8080/api/personas';
  constructor(private http:HttpClient) { }

  getContactos():Observable<Contacto[]>{
    //return of(CONTACTOS);
   //return this.http.get<Contacto[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Contacto[])
    );

  }
}

