import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './model/new-user-data';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) {
  }

  public postNewUserRequest(newUserData: UserData): Observable<Object> {

    try {
      const httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
      }

      const url = '/pwcgServer/newUserRequest'
      return this.httpClient.post(url, JSON.stringify(newUserData), httpOptions);
    }
    catch (e) {
      console.log(e);
    }

    return null;
  }

}
