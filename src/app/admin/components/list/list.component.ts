import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../services/animal.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit{
  numbers=Array(10);

  public title;
  public animals: Animal[];

  constructor(private _animalService: AnimalService,
              private _route: ActivatedRoute,
              private _router: Router
  ) {

    this.title = 'Listado de Animales';
  }


  ngOnInit(): void {
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
