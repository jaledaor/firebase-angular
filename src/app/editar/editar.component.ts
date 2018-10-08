import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

import {AppService} from '../app.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() set contacto(valor) {
     this.crearFormulario();
     if (valor) {
       this.contactoOriginal = valor;
       this.form.patchValue({
         nombre: valor.nombre,
         apellidos: valor.apellidos,
         telefono: valor.telefono,
         ciudad: valor.ciudad
       });
     }
  }

  @Output()  cerrar = new EventEmitter();
  form: FormGroup;
  contactoOriginal: any;
  constructor(
    private service: AppService,
    private fb: FormBuilder) {}


  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre: '',
      apellidos: '',
      telefono: '',
      ciudad: ''
    });
  }

  onGuardar() {
    this.service.updateContacto(this.contactoOriginal.key, this.form.value);
    this.onCancelar();
  }

  onCancelar() {
    this.contactoOriginal = null;
    this.cerrar.emit();
  }

}
