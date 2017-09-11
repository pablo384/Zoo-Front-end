import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title: String;
  public user: User;
  public identity;
  public token;
  public status:string;


  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService) {
    this.title = 'Identificate';
    this.user = new User('', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    console.log('login.component cargado!!');
  }

  onSubmit() {
    //loguear user y conseguir obj
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;
        if (!this.identity || !this.identity._id) {
          alert('El usuario no se ha logueado correctamente');
        } else {
          this.identity.password='';
          //mostrar identity
          console.log(this.identity);
          //conseguir el token
          this._userService.signup(this.user, 'true').subscribe(
            response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                alert('El token no se ha generado');
              } else {
                //mostrar token
                console.log(this.token);
                this.status='success';
              }
            },
            error => {
              console.log(<any>error);
            }
          );
        }
      },
      error => {
        var errms = <any>error;
        if (errms!=null){
          var body = JSON.parse(error._body);
          this.status='error';
        }
      }
    );
  }
}
