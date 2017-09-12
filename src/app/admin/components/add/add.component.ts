import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GLOBAL} from '../../../services/global';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../services/animal.service';
import {UploadService} from '../../../services/upload.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers:[UserService, AnimalService, UploadService]
})
export class AddComponent implements OnInit{

  public title;
  public animal:Animal;
  public identity;
  public token;
  public url:string;
  public status;

  constructor(
    private _animalService:AnimalService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _uploadService:UploadService
  ){
    this.title='Agregar Animal';
    this.animal=new Animal('','',2017,'','');
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
    this.url=GLOBAL.url;
  }


  ngOnInit(): void {
      console.log('animal-add componente ha sido cargado!!')
  }

  onSubmit(){
    this._animalService.addAnimal(this.token,this.animal).subscribe(
      response =>{
        if (!response.animal){
          this.status='error';
        }else {
          this.status='success';
          this.animal=response.animal;

          //subir imagen de animal
          this._router.navigate(['/admin-panel/listado'])
        }

      },
      error =>{
        var erms=<any>error;
        if (erms!=null){
          this.status='error';
        }
      }
    )
  }
}
