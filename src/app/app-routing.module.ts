import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObtainInputComponent } from './obtain-input/obtain-input.component';
import { DisplayInputComponent } from './display-input/display-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCountryCountComponent } from './list-country-count/list-country-count.component';
import { CardsDisplayComponent } from './cards-display/cards-display.component';
import { ErrorComponent } from './error/error.component';
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
    path:'error',
    component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,ReactiveFormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
