import { Pipe, PipeTransform } from '@angular/core';
import { CountryDetails } from './countries/country-detail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: CountryDetails[], serachText: string): CountryDetails[] {
     if(!countries || !serachText)
     {
       return countries;
     }

     return countries.filter(country =>
      country.name.toLowerCase().indexOf(serachText.toLowerCase()) !== -1);
     
  }

}
