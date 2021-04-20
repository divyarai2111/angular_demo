import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/user';

import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  register(){

  }


  login(user:User):Observable<any>{
    //console.log(user);    
    return this.httpClient.post("http://localhost:3001/auth/v1",user);    
  }

  //Token Storge

  setToken(token:any):void{
    console.log(token);
    
    localStorage.setItem('token', token);
  }

  getToken():any{
    console.log(localStorage.getItem("token"));
    
    return localStorage.getItem("token");
  }
  removeToken():void{
    localStorage.removeItem('token');
  }

  // authniticate my token

  authenticate(token:any){
    return this.httpClient.post<any>("http://localhost:3001/auth/v1/isAuthenticated",{},{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    }).toPromise();
    }
}
