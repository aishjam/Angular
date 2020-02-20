import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDetails } from './country-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  countrySelected= new EventEmitter<CountryDetails>();

  getCountries(){
    return this.http.get<CountryDetails[]>('https://restcountries.eu/rest/v2/all');
  }
}