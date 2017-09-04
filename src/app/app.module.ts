import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
//componentes
import { AppComponent } from './app.component';
import {TiendaComponent} from './components/tienda/tienda.component'
import {ParquesComponent} from './components/parques/parques.component'
import {HomeComponent} from './components/home/home.component';
import {KeepersComponent} from './components/keepers/keepers.component';
import {ContactComponent} from './components/contact/contact.component';
import {AnimalsComponent} from './components/animals/animals.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    KeepersComponent,
    ContactComponent,
    AnimalsComponent
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
