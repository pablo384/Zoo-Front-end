import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animation';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {GLOBAL} from '../../services/global';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  providers:[UserService],
  animations:[fadeIn]
})
export class KeepersComponent implements OnInit{
  title:string;
  public keepers:User[];
  public url:string;

  constructor(
    private _userService:UserService
  ){
    this.title="Cuidadores";
    this.url=GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('keepers.component.ts');
    this.getkeepers();
  }

  getkeepers(){
    this._userService.getKeepers().subscribe(
      response=>{
        if (!response.users){

        }else {
          this.keepers=response.users;
        }

      },
      error=>{
        console.log( <any>error)
      }
    )
  }
}
