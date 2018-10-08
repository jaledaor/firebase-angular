import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {MatMenuModule, MatToolbarModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarComponent } from './editar/editar.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyDcc33wy4D4KaPrKEfC35BojFJaOL6PUxQ',
    authDomain: 'angular-front.firebaseapp.com',
    databaseURL: 'https://angular-front.firebaseio.com',
    storageBucket: 'angular-front.appspot.com',
    messagingSenderId: '1052965922338'
};

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
