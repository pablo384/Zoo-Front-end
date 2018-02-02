import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GLOBAL} from '../../../services/global';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../services/animal.service';
import {UploadService} from '../../../services/upload.service';
import {UserService} from '../../../services/user.service';
import {fadeLateral} from '../../animation';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [UserService, AnimalService, UploadService],
  animations: [fadeLateral]
})
export class AddComponent implements OnInit {

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
    this.title = 'Agregar Animal';
    this.animal = new Animal('', '', '', 2017, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }


  ngOnInit(): void {
    console.log('animal-add componente ha sido cargado!!');
  }

  onSubmit() {
    this._animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          //subir imagen de animal
          if (!this.filesToUpload) {
            this._router.navigate(['/admin-panel/listado']);
          } else {
            this._uploadService.makeFileRequest(GLOBAL.url + 'upload-image-animal/' + this.animal._id,
              [], this.filesToUpload, this.token, 'image').then(
              (result: any) => {
                this.animal.image = result.image;
                this._router.navigate(['/admin-panel/listado']);
              }
            );
          }


        }

      },
      error => {
        let erms = <any>error;
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
