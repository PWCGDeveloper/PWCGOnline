import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoginData } from './model/logindata';
import { Context } from './model/context';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  
  public postLoginRequest(loginData: LoginData) {

    try {
      const httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
      }

      Context.context.isLoggedIn = false;

      const url = '/pwcgServer/loginRequest'
      this.httpClient.post(url, JSON.stringify(loginData), httpOptions).subscribe(
        res => {
          console.log(`Response is ${JSON.stringify(res)}`);
          Context.context.isLoggedIn = true;
          Context.context.user = loginData.username;
        },
        error => {
          console.log(`Response is ${JSON.stringify(error)}`);
        });
    }
    catch (e) {
      console.log(`Caught exception on login: ${e}`);
    }
  }
}
