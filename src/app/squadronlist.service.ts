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
    };

    const promise = new Promise((resolve, reject) => {
      const url = `/pwcgServer/squadronList?campaignName=${campaignName}`;
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
}
