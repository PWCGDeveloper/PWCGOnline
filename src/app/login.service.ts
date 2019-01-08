import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoginData } from './model/logindata';
import { Context } from './model/context';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  
  public postLoginRequest(loginData: LoginData): Observable<Object> {

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
      return this.httpClient.post(url, JSON.stringify(loginData), httpOptions)
    }
    catch (e) {
      console.log(`Caught exception on login: ${e}`);
    }

    return null;
  }
}
