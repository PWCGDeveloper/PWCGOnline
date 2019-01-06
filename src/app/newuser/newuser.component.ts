import { Component, OnInit } from '@angular/core';
import { UserData } from '../model/new-user-data';
import { NewUserService } from '../new-user.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewUserComponent implements OnInit {


  clickMessage: String = 'Enter username and password, then submit';
  newUserData: UserData =
    {
      username: '',
      password: '',
      note: '',
      approved: false,
    }

  constructor(private newUserService: NewUserService) {
  }

  ngOnInit() {
    this.clickMessage = "Enter user registration information and click submit";
  }

  onSubmitNewPlayerRequest() {
    try {
      if (this.validate()) {
        console.log(`Submit new user: ` + JSON.stringify(this.newUserData));
        this.newUserService.postNewUserRequest(this.newUserData);
        this.clickMessage = "New player request submitted for " + this.newUserData.username;
      }
      else {
        this.clickMessage = "Username and password are required fields";
      }
    }
    catch (e) {
      console.log("Error submitting new user request", e);
    }
  }

  validate() {
    if (this.newUserData.username == '') {
      return false;
    }
    if (this.newUserData.password == '') {
      return false;
    }

    return true;
  }
}
