import { Component, OnInit, Input } from '@angular/core';
import { CountryDetails } from '../../country-detail.model';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {

@Input() countryDetails:CountryDetails;

  constructor() { }

  ngOnInit() {
  }

}
