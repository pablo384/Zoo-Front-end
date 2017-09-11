import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers:[UserService]
})
export class LoginComponent implements OnInit{

  public title:String;
  public user:User;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.title='Identificate';
    this.user=new User('','','','','','','');
  }

  ngOnInit(): void {
    console.log('login.component cargado!!');
  }
  onSubmit(){
      console.log(this.user);
  }
}
