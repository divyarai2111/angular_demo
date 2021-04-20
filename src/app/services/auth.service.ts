import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  gotoLogin(){
    this.router.navigate(['/login']);

  }

  gotoNoteHome(){
    this.router.navigate(['notehome']);
  }
}
