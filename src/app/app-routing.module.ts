import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObtainInputComponent } from './obtain-input/obtain-input.component';
import { DisplayInputComponent } from './display-input/display-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCountryCountComponent } from './list-country-count/list-country-count.component';
import { CardsDisplayComponent } from './cards-display/cards-display.component';
import { ErrorComponent } from './error/error.component';
import { ObtainRegionComponent } from './obtain-region/obtain-region.component';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';
import { ObtainCurrencyComponent } from './obtain-currency/obtain-currency.component';
import { DisplayCurrencyComponent } from './display-currency/display-currency.component'
const routes: Routes = [
  
  {
    path: '',
    component: CardsDisplayComponent
  },
  {
    path: 'getInput',
    component: ObtainInputComponent
  },
  {
    path: 'display/:id',
    component: DisplayInputComponent
  },
  {
    path:'countryList',
    component: ListCountryCountComponent
  },
  {
    path:'inputRegion',
    component: ObtainRegionComponent
  },
  {
    path:'displayWeather/:id',
    component: DisplayWeatherComponent
  },
  {
    path:'inputCurrency',
    component: ObtainCurrencyComponent
  },
  {
    path:'displayCurrency',
    component: DisplayCurrencyComponent
  },
  {
    path:'error',
    component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,ReactiveFormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
