import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) { }

  getCountryByName(keyword: string) {
    const api = 'https://restcountries.com/v3.1/name/${keyword}';
    return this.http.get(api);
  }
}
