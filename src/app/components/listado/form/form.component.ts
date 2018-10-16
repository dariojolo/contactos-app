import { Component, OnInit } from '@angular/core';
import { Contacto } from "../../../Clases/Contacto";
import { ContactosService } from '../../../services/contactos.service';
import { Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private contacto:Contacto = new Contacto();
  private titulo:string = "Crear cliente";
  constructor(private contactoService: ContactosService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarContacto();
  }

  cargarContacto():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params[`id`];
      if (id){
        this.contactoService.getContacto(id).subscribe((contacto) => this.contacto = contacto);
      }
    } )
  }

  public create(){
    this.contactoService.create(this.contacto).subscribe(
      contacto => {
        this.router.navigate(['/contactos'])
        swal("Contacto guardado",`Contacto ${contacto.nombre} creado con exito!`, 'success');
      })
  }
  public update(){
    this.contactoService.update(this.contacto)
    .subscribe(
      contacto => {
        this.router.navigate(['/contactos']);
        swal('Contacto actualizado',`Contacto ${contacto.nombre}actualizado con exito!`,'success');
      }
    )
  }
}
