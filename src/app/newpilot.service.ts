import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PilotData } from './model/pilotdata';

@Injectable({
  providedIn: 'root'
})

export class NewPilotService {

  constructor(private httpClient: HttpClient) { 
  }

  public postNewPilotRequest(newPilotData: PilotData): Observable<Object> {

    try {
      const httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
      }

      const url = '/pwcgServer/newPilotRequest'
      return this.httpClient.post(url, JSON.stringify(newPilotData), httpOptions);
    }
    catch (e) {
      console.log(e);
    }

    return null;
  }
}
