import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './newuser/newuser.component';
import { NewPilotComponent } from './newpilot/newpilot.component';
import { LoginComponent } from './login/login.component';
import { SplashPageComponent } from './splashpage/splashpage.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newpilot', component: NewPilotComponent },
  { path: 'splashpage', component: SplashPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
