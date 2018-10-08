import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contactos';
  contactos: any[];
  ciudades = ['todo', 'bogota', 'cali', 'medellin', 'Otra Ciudad'];
  contacto = null;
  contactoEditar = null;

  constructor(private servicio: AppService) {}
  ngOnInit() {
    this.servicio.getContactos()
        .valueChanges().subscribe( contactos => this.contactos =  contactos);

  }

  onClick(contacto) {
    this.contacto = contacto;
  }

  cerrarDetalles() {
    this.contacto = null;
  }

  onEditar(contacto) {
    this.contactoEditar = contacto;
  }

  cerrarEdicion() {
    this.contactoEditar = null;
  }
}
