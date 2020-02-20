import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryItemComponent } from './countries/country-list/country-item/country-item.component';
import { CountriesService } from './countries/country-details.service';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
