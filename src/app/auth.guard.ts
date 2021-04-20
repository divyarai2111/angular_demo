import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private authService:AuthService) {

  }
  canActivate(): Promise<boolean> {
    return this.userService.authenticate(this.userService.getToken())
      .then((response) => {
        console.log(response);
        if (response.isAuthenticated) {
          return true;
        }
        else {
         
          this.authService.gotoLogin();
          return false;

        }
      })


  }
}
