import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animation';
import {AnimalService} from '../../services/animal.service';
import {UserService} from '../../services/user.service';
import {Animal} from '../../models/animal';
import {SearchPipe} from '../../admin/pipes/search.pipe';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  providers:[AnimalService, SearchPipe],
  animations:[fadeIn]
})
export class AnimalsComponent implements OnInit{
  public title;
  public animals: Animal[];
  public busqueda;
  public url;

  constructor(private _animalService: AnimalService,
              private _userService:UserService){
    this.title='Animales'
    this.url=GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('animals.component.ts')
    this.getAnimals()
  }

  getAnimals(){
    this._animalService.getAnimals().subscribe(
      response=>{
        if (!response.animals){

        }else {
          this.animals=response.animals;
        }

      },
      error=>{
        var erms = <any>error;
        if (erms != null) {

        }
      }
    )
  }
}
