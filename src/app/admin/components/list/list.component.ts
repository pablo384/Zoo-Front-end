import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../services/animal.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit{
  numbers=Array(10);

  public title;
  public animals: Animal[];
  public token;
  public busqueda;

  constructor(private _animalService: AnimalService,
              private _userService:UserService,
              private _route: ActivatedRoute,
              private _router: Router
  ) {

    this.title = 'Listado de Animales';
    this.token=this._userService.getToken();
  }


  ngOnInit(): void {
    this.getAnimals();
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
  deleteAnimal(id){
    $('#myModal-'+id).modal('hide');
    this._animalService.deleteAnimal(this.token,id).subscribe(
      response =>{
        if (!response.animal){
          alert('Error en el Servidor');
        }else {

        }
        this.getAnimals();
      },
      error =>{
        alert('Error en el Servidor');
      }
    )
  }
}
