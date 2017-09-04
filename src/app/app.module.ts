import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import {TiendaComponent} from './components/tienda/tienda.component'
import {ParquesComponent} from './components/parques/parques.component'



@NgModule({
  declarations: [
    AppComponent,

    TiendaComponent,
    ParquesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
