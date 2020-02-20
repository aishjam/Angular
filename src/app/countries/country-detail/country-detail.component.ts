import { Component, OnInit, Input } from '@angular/core';
import { CountryDetails } from '../country-detail.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {


  @Input() country: CountryDetails;
  constructor() { }

  ngOnInit() {
  }

}
