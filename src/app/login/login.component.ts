import { Component, OnInit } from '@angular/core';
import { LoginData } from '../model/logindata';
import { LoginService } from '../login.service';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Context } from '../model/context';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  clickMessage: String;
  loginData: LoginData;

  constructor(private loginService: LoginService, private router: Router) {
    this.clickMessage = 'Enyter username and password click submit';
    this.loginData = new LoginData();
  }

  ngOnInit() {
    this.clickMessage = 'Enter username and password click submit';
  }

  onSubmitLoginRequest() {
    Context.context.isLoggedIn = false;
    Context.context.user = "";

    try {
      if (this.validate()) {
        console.log(`Submit new user: ` + JSON.stringify(this.loginData));
        const obs = this.loginService.postLoginRequest(this.loginData);
        obs.subscribe(
          data => {
            this.clickMessage = 'Login complete for ' + this.loginData.username;
            Context.context.isLoggedIn = true;
            Context.context.user = this.loginData.username;
            this.router.navigate(['splashpage']);
          },
          error => { 
            if (error.status == 403) {
              this.clickMessage = `${this.loginData.username} access denied`;
            }
            else {
              this.clickMessage = `${this.loginData.username} unable to log onto server`;
            }
          }
       );


      }
      else {
        this.clickMessage = 'Username and password are required fields';
      }
    }
    catch (e) {
      console.log('Error submitting login request', e);
    }
  }

  validate() {
    if (this.loginData.username === '') {
      return false;
    }
    if (this.loginData.password === '') {
      return false;
    }

    return true;
  }
}
