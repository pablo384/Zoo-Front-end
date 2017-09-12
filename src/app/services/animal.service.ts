import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GLOBAL} from './global';


@Injectable()
export class AnimalService {
  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal){

    let params = JSON.stringify(animal);
    let headers=new Headers({
      'Content-Type':'application/json',
      'Authorization':token
    });

    return this._http.post(this.url+'animal',params, {headers:headers})
      .map(res => res.json());

  }
  getAnimales(){

    // let headers=new Headers({'Content-Type':'application/json'});
    // let options = new RequestOptions({headers:headers});
    return this._http.get(this.url+'animals')
      .map(res => res.json());
  }

}
