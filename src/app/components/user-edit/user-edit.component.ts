import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector:'user-edit',
  templateUrl:'./user-edit.component.html',
  providers:[UserService]
})

export class UserEditComponent implements OnInit{
  public title:string;
  public user:User;
  public status;
  public identity;
  public token;

  constructor(
    private _useService:UserService
  ){
    this.title='Actualizar mis datos';
    this.identity=this._useService.getIdentity();
    this.token=this._useService.getToken();
    this.user=this.identity;
  }

  ngOnInit(): void {
      console.log('user-edit.component.ts cargado');
    console.log(this.user.name);
  }
  onSubmit(){
      this._useService.updateUser(this.user).subscribe(
        response=>{
          if (!response.user){
            this.status='error';
          }else {
            this.status='success';
            localStorage.setItem('identity',JSON.stringify(response.user));

            //subida de la imagen
          }

        },
        error=>{
          const erMensaje =<any>error;
          if (erMensaje != null ){
            console.log(erMensaje);
            this.status='error';
          }
        }
      )

  }
}
