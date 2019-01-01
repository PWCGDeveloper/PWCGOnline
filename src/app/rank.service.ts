import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rank } from './model/rank';

@Injectable({
  providedIn: 'root'
})

export class RankService {

  ranks: Rank[];

  constructor(private httpClient: HttpClient) {
    this.ranks = [];
  }

  public getRanksForService(serviceId: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
    };

    const promise = new Promise((resolve, reject) => {
      const url = `/pwcgServer/ranksForService?serviceId=${serviceId}`;
      this.httpClient.get<Rank[]>(url).toPromise().then(res => {
        this.ranks = res;
        resolve();
      },
      msg => {
        reject();
      });
    });

    return promise;
  }}
