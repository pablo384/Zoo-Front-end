import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//componentes
import {TiendaComponent} from './components/tienda/tienda.component';
import {ParquesComponent} from './components/parques/parques.component';

const appRoutes:Routes=[
  {path:'', component: TiendaComponent},
  {path:'', redirectTo:'Tienda',pathMatch:'full'},
  {path:'tienda', component:TiendaComponent},
  {path:'**', component:TiendaComponent}

];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
