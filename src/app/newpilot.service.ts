import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HumanPilot } from './model/humanpilot';

@Injectable({
  providedIn: 'root'
})

export class NewPilotService {

  constructor(private httpClient: HttpClient) { 
  }

  public postNewPilotRequest(newPilotData: HumanPilot): Observable<Object> {

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
