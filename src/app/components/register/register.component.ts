import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user'
import {GLOBAL} from '../../services/global';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers:[UserService]
})
export class RegisterComponent implements OnInit{

  public title:String;
  public user:User;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService
  ){
    this.title='Registro';
    this.user=new User('','','','','','','');
  }

  ngOnInit(): void {
      console.log('register.component cargado!!');
      console.log(this._userService.register());
  }

  onSubmit(){
      console.log(this.user);

  }
}
