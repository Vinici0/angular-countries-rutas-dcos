import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { RouterModule } from '@angular/router';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CountryPageComponent,
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    //TODO: Importar para que quede clasro todas las rutas que se van a utilizar
    CountriesRoutingModule,
    RouterModule,
    SharedModule,

  ],
})
export class CountriesModule { }
