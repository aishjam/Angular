import { Component, OnInit } from '@angular/core';
import { CountryDetails } from '../country-detail.model';
import { CountriesService } from '../country-details.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

countries: CountryDetails[];
searchText: string;

  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(resData => {
      this.countries = resData;
      console.log(this.countries);
    },err=>{
      console.log(err);
    });
  }

  onCountryClick(country: CountryDetails){
      this.countryService.countrySelected.emit(country);
  }
}
