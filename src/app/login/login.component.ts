import { Component, OnInit } from '@angular/core';
import { LoginData } from '../model/logindata';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clickMessage: String;
  loginData: LoginData;

  constructor(private loginService: LoginService) { 
    this.clickMessage = "Enyter username and password click submit";
    this.loginData = new LoginData();
  }

  ngOnInit() {
    this.clickMessage = "Enyter username and password click submit";
  }

  onSubmitLoginRequest() {
    try {
      if (this.validate()) {
        console.log(`Submit new user: ` + JSON.stringify(this.loginData));
        this.loginService.postLoginRequest(this.loginData);
        this.clickMessage = "Login request submitted for " + this.loginData.username;
      }
      else {
        this.clickMessage = "Username and password are required fields";
      }
    }
    catch (e) {
      console.log("Error submitting login request", e);
    }
  }

  validate() {
    if (this.loginData.username == '') {
      return false;
    }
    if (this.loginData.password == '') {
      return false;
    }

    return true;
  }
}
