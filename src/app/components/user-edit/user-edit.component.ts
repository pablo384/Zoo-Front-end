import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {UploadService} from '../../services/upload.service';
import {GLOBAL} from '../../services/global';

@Component({
  selector:'user-edit',
  templateUrl:'./user-edit.component.html',
  providers:[UserService, UploadService]
})

export class UserEditComponent implements OnInit{
  public title:string;
  public user:User;
  public status;
  public identity;
  public token;

  constructor(
    private _useService:UserService,
    private _uploadService:UploadService
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
            this._uploadService.makeFileRequest(GLOBAL.url+'upload-image-user/'+this.user._id,
              [],this.filesToUpload,this.token,'image').then(
              (result:any)=>{
                this.user.image=result.image;
                localStorage.setItem('identity',JSON.stringify(response.user));
              }
            )
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

  public filesToUpload:Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;

  }
}
