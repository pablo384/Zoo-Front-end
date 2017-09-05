//importar modulos necesarios para crear modulo

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//importar  componentes
import {GuardarEmailComponent} from './components/guardar-email/guardar-email.component';
import {MostrarEmailComponent} from './components/mostrar-email/mostrar-email.component';
import {MainEmailComponent} from './components/main-email/main-email.component';

//generar nuevo modulo con su configuracion
//decorador NgModule para cargar componentes y configuacion
@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  exports:[MainEmailComponent]
})

export class ModuloEmailModule {
}
