import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IsEvenApiResponse } from '../model/http_response';

@Injectable() 
export class BackendService {
  getHello() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://api.isevenapi.xyz/api/iseven/';

  constructor(private http: HttpClient) {}

  getIsEven(num: number) {
    const url = this.apiUrl + num;
    return this.http.get<IsEvenApiResponse>(url);
  }
}
