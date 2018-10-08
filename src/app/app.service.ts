import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class AppService {
  contactos: AngularFireList<any[]>;


  constructor(private af: AngularFireDatabase) {}

  getContactos() {
    this.contactos = this.af.list('/contactos') as AngularFireList<any[]>;
    return this.contactos;
  }

  updateContacto(key, contacto) {
    this.contactos.update(key, contacto);
  }
}
