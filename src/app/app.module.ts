import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {appRoutingProviders, routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//importar nuestro nuevo modulo
import {ModuloEmailModule} from './moduloemail/moduloEmail.module';
import {AdminModule} from './admin/admin.module';
//componentes
import {AppComponent} from './app.component';
import {SimpleTinyComponent} from './components/simpletiny/simpletiny.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {ParquesComponent} from './components/parques/parques.component';
import {HomeComponent} from './components/home/home.component';
import {KeepersComponent} from './components/keepers/keepers.component';
import {ContactComponent} from './components/contact/contact.component';
import {AnimalsComponent} from './components/animals/animals.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleTinyComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    KeepersComponent,
    ContactComponent,
    AnimalsComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
