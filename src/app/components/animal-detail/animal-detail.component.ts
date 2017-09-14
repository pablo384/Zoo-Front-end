import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Animal} from '../../models/animal';
import {AnimalService} from '../../services/animal.service';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {

  public animal:Animal;
  public url:string;

  constructor(private _animalService: AnimalService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.url=GLOBAL.url;

  }

  ngOnInit(): void {
    console.log('animal-detail.component cargado!!!');
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
}
