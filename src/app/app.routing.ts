import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//componentes
import {TiendaComponent} from './components/tienda/tienda.component';
import {HomeComponent} from './components/home/home.component';
import {KeepersComponent} from './components/keepers/keepers.component';
import {ContactComponent} from './components/contact/contact.component';
import {AnimalsComponent} from './components/animals/animals.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';
import {AnimalDetailComponent} from './components/animal-detail/animal-detail.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'animales', component: AnimalsComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'cuidadores', component: KeepersComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: 'animal/:id', component: AnimalDetailComponent},
  {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
