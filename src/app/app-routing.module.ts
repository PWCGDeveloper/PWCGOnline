import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent }      from './newuser/newuser.component';
import { NewPilotComponent }      from './newpilot/newpilot.component';
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  { path: 'newuser', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newpilot', component: NewPilotComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
