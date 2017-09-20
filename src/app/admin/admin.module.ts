//modulos
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
//componentes
import {MainComponent} from './components/main/main.component';
import {EditComponent} from './components/edit/edit.component';
import {AddComponent} from './components/add/add.component';
import {ListComponent} from './components/list/list.component';
import {AdminGuard} from '../services/admin.guard';
import {UserService} from '../services/user.service';
import {SearchPipe} from './pipes/search.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations:[
    MainComponent,
    EditComponent,
    ListComponent,
    AddComponent,
    SearchPipe
  ],
  imports:[
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[
    MainComponent,
    EditComponent,
    ListComponent,
    AddComponent,
    SearchPipe
  ],
  providers:[
    AdminGuard,
    UserService]
})

export class AdminModule{}
