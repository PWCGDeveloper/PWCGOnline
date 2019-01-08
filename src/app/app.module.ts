import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewUserComponent } from './newuser/newuser.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewPilotComponent } from './newpilot/newpilot.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {CustomMaterialModule} from './material.module';
import { NewUserNavigationComponent } from './new-user-navigation/new-user-navigation.component';
import { SplashPageComponent } from './splashpage/splashpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    NewPilotComponent,
    LoginComponent,
    NavigationComponent,
    NewUserNavigationComponent,
    SplashPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
