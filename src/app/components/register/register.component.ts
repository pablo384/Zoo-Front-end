import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  public title:String;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.title='Registro';
  }

  ngOnInit(): void {
      console.log('register.component cargado!!');
  }
}
