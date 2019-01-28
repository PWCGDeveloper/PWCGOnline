import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HumanPilot } from './model/humanpilot';
import { SquadronMember } from './model/squadronmember';

@Injectable({
  providedIn: 'root'
})
export class SquadronPersonnelService {

  squadronPersonnel: SquadronMember[];

  constructor(private httpClient: HttpClient) { 
  }

  
  public getSquadronPersonnel(humanPilot: HumanPilot) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
    };

    const promise = new Promise((resolve, reject) => {
      const url = `/pwcgServer/squadronMembersForPilot?humanPilot=${JSON.stringify(humanPilot)}`;
      this.httpClient.get<SquadronMember[]>(url).toPromise().then(res => {
        this.squadronPersonnel = res;
        resolve();
      },
      msg => {
        reject();
      });
    });

    return promise;
  }
}
