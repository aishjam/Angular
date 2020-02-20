import { Component, OnInit } from '@angular/core';
import { CountryDetails } from './country-detail.model';
import { CountriesService } from './country-details.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  selectedCountry: CountryDetails;
  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.countryService.countrySelected.subscribe(
      (country: CountryDetails) => {
        this.selectedCountry = country;
      }
    )
  }

}
