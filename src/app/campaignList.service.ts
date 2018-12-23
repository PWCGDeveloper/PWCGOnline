import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Campaign } from './model/campaign';

@Injectable({
  providedIn: 'root'
})

export class CampaignListService {

  campaignList: Campaign[];

  constructor(private httpClient: HttpClient) {
    this.campaignList = [];
  }

  public getCampaignList() {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
    }

    let promise = new Promise((resolve, reject) => {
      const url = '/pwcgServer/campaignList'
      this.httpClient.get<Campaign[]>(url).toPromise().then(res => {
        this.campaignList = res;
        resolve();
      },
      msg => {
        reject();
      });
    });

    return promise;
  }
}
