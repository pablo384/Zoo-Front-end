import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate{

  constructor(
    private _router:Router,
    private _userService:UserService
  ){}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let identity = this._userService.getIdentity();
    if (identity && identity.role == 'ROLE_ADMIN'){
      return true;
    }else {
      this._router.navigate(['/home']);
      return false;
    }
  }
}
