import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit, DoCheck{

  public title:string;
  public identity;

  constructor(
    private _userService:UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title='NGZOO';
  }


  ngOnInit(): void {
      this.identity=this._userService.getIdentity();
  }

  ngDoCheck(): void {
    this.identity=this._userService.getIdentity();
  }
  logout(){
      localStorage.clear();
      this.identity=null;
      this._router.navigate(['/'])
  }
}
