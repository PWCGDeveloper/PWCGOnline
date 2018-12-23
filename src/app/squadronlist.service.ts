import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Squadron } from './model/squadron';


@Injectable({
  providedIn: 'root'
})

export class SquadronListService {

  squadronList: Squadron[];

  constructor(private httpClient: HttpClient) { 
    this.squadronList = [];
  }

  public getCampaignSquadronList(campaignName: string) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
    }

    let promise = new Promise((resolve, reject) => {
      const url = `/pwcgServer/squadronList?${campaignName}`
      this.httpClient.get<Squadron[]>(url).toPromise().then(res => {
        this.squadronList = res;
        resolve();
      },
      msg => {
        reject();
      });
    });

    return promise;
  }

  /*
  public getCampaignSquadronList(campaignName: string): Observable<Squadron[]> {
    let squadronList: Squadron[] = [];

    try {
      const httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
      }

      const url = `/pwcgServer/squadronList?${campaignName}`
      return this.httpClient.get<Squadron[]>(url);
    }
    catch (e) {
      console.log(e);
    }

    return null;
  }
  */
}
