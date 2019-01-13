import { Component, OnInit } from '@angular/core';
import { UserData } from '../model/new-user-data';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewUserComponent implements OnInit {


  clickMessage: string = 'Enter username and password, then submit';
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
    if (this.validate()) {
      console.log(`Submit new user: ` + JSON.stringify(this.newUserData));
      const obs = this.newUserService.postNewUserRequest(this.newUserData);
      obs.subscribe(
        data => { 
          this.clickMessage = "New player request submitted for " + this.newUserData.username;
        },
        error => { 
          if (error.status == 409) {
            this.clickMessage = `Username ${this.newUserData.username} already exists.  Choose another name`;
          }
          else {
            this.clickMessage = `Server error for user ${this.newUserData.username}.  Contact host`;
          }
        }
     );
    }
    else {
      this.clickMessage = "Username and password are required fields";
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
