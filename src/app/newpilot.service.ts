import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewPilotData } from './model/new-pilot-data';

@Injectable({
  providedIn: 'root'
})

export class NewPilotService {

  constructor(private httpClient: HttpClient) { 
  }

  public postNewPilotRequest(newPilotData: NewPilotData) {

    try {
      const httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
      }

      const url = '/pwcgServer/newPilotRequest'
      this.httpClient.post(url, JSON.stringify(newPilotData), httpOptions).subscribe(
        res => {
          console.log(`Response is ${JSON.stringify(res)}`);
        },
        error => {
          console.log(`Response is ${JSON.stringify(error)}`);
        });
    }
    catch (e) {
      console.log(e);
    }

    return null;
  }
}
