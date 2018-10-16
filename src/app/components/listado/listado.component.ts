import { Component, OnInit } from '@angular/core';
import {  Contacto } from "../../Clases/Contacto";
import {  ContactosService } from "../../services/contactos.service";
import swal from 'sweetalert2'

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
      contactos => {this.contactos = contactos;console.log("Contactos: " + this.contactos[0].createAt);}
    );   
  }
  delete (contacto:Contacto):void{
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Esta seguro?',
      text: `Seguro que desea eliminar el contacto ${contacto.nombre} ${contacto.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminarlo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._contactosService.delete(contacto.id).subscribe(
          response => {
            this.contactos = this.contactos.filter(con => con !== contacto)
            swalWithBootstrapButtons(
              'Eliminado!',
              'El contacto ha sido eliminado.',
              'success'
            )
          }
        )
       
      } 
    })
  }

}
