import { Injectable } from '@angular/core';
import { CONTACTOS } from '../utils/contactos.json';
import {  Contacto } from "../Clases/Contacto";
import {  of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }

  getContactos():Observable<Contacto[]>{
    return of(CONTACTOS);
  }
}

