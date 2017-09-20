import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GLOBAL} from '../../../services/global';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../services/animal.service';
import {UploadService} from '../../../services/upload.service';
import {UserService} from '../../../services/user.service';
import {fadeLateral} from '../../animation';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [UserService, AnimalService, UploadService],
  animations:[fadeLateral]
})
export class EditComponent implements OnInit {

  public title;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status;
  public is_edit;

  constructor(private _animalService: AnimalService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _uploadService: UploadService) {
    this.title = 'Edicion de  Animal';
    this.animal=new Animal('','','',0,'','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.is_edit=true;
  }


  ngOnInit(): void {
    console.log('animal-add componente ha sido cargado!!');
    this.getAnimal();
  }
  getAnimal(){
    this._route.params.forEach((params:Params)=>{
      let id = params['id'];
      this._animalService.getAnimal(id).subscribe(
        response =>{
          if (!response.animal){
            this._router.navigate(['/home']);
          }else {
            this.animal=response.animal;
          }
        },
        error=>{
          console.log(<any> error);
          this._router.navigate(['/home']);

        }
      )
    })
  }

  onSubmit() {
    var id = this.animal._id;
    this._animalService.editAnimal(this.token,id, this.animal).subscribe(
      response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          //subir imagen de animal
          if (!this.filesToUpload) {
            this._router.navigate(['/animal', id]);
          } else {
            this._uploadService.makeFileRequest(GLOBAL.url + 'upload-image-animal/' + this.animal._id,
              [], this.filesToUpload, this.token, 'image').then(
              (result: any) => {
                this.animal.image = result.image;
                this._router.navigate(['/animal', id]);

              }
            );
          }


        }

      },
      error => {
        var erms = <any>error;
        if (erms != null) {
          this.status = 'error';
        }
      }
    );
  }

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }
}
