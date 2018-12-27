import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PilotData } from './model/pilotdata';

@Injectable({
  providedIn: 'root'
})
export class PilotListService {


  pilotList: PilotData[];

  constructor(private httpClient: HttpClient) {
    this.pilotList = [];
  }

  public getPilotsForUser(username: string) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
    };

    const promise = new Promise((resolve, reject) => {
      const url = `/pwcgServer/pilotsForPlayer?playerHandle=${username}`;
      this.httpClient.get<PilotData[]>(url).toPromise().then(res => {
        this.pilotList = res;
        console.log(JSON.stringify(res));
        resolve();
      },
      msg => {
        reject();
      });
    });

    return promise;
  }}
