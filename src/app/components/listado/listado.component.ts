import { Component, OnInit } from '@angular/core';
import {  Contacto } from "../../Clases/Contacto";
import {  ContactosService } from "../../services/contactos.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 contactos: Contacto[];

  constructor(private _contactosService:ContactosService) { }

  ngOnInit() {
    this._contactosService.getContactos().subscribe(
      contactos => this.contactos = contactos
    );
  }

}
