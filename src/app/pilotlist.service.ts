import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HumanPilot } from './model/humanpilot';

@Injectable({
  providedIn: 'root'
})
export class PilotListService {


  pilotList: HumanPilot[];

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
      this.httpClient.get<HumanPilot[]>(url).toPromise().then(res => {
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
