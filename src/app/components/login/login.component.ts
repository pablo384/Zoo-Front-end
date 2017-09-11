import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers:[UserService]
})
export class LoginComponent implements OnInit{

  public title:String;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.title='Identificate';
  }

  ngOnInit(): void {
    console.log('login.component cargado!!');
  }
}
