import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router'
import { User } from '../modules/user';
import {UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(public router: Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  // Design my Own Form
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(5) && Validators.required])
  })

  login() {
    // console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      this.user.username = this.loginForm.value["userName"];
      this.user.password = this.loginForm.value['password'];

      this.userService.login(this.user)
      .subscribe(data=>{
         console.log(data);        
        // console.log(data["token"]);
      //  console.log(data["token"]);
      //const token= data['token'];
       // this.userService.setToken(token);
       localStorage.setItem('token',data.token);
      },
      error=>{
        console.log("Wrong");
        
        console.log(error);
        
      }
      )
      alert("Sucess");
      // const navigatiobExtras: NavigationExtras = {
      //   queryParamsHandling: 'preserve',
      //   preserveFragment: true
      // }
      // this.router.navigate(['/notehome'], navigatiobExtras)
      this.router.navigate(['/notehome']);

    }
    else {
      // alert("Somehing Wrong")
    }
  }
  getUserName() {
    return this.loginForm.get("userName");

  }

  getPassword() {
    return this.loginForm.get("password");

  }

  getUserNameErrorMessage() {
    if (this.getUserName()?.invalid && (this.getUserName()?.dirty || this.getUserName()?.touched)) {
      return "Must enter UserName";
    }
    else {
      return '';
    }
  }
  getPasswordErrorMessage() {
    if (this.getPassword()?.invalid && (this.getPassword()?.dirty || this.getPassword()?.touched)) {

      return "Must enter UserName";
    }
    else {

      return '';
    }
  }


}
