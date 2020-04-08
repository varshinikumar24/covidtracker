import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObtainInputComponent } from './obtain-input/obtain-input.component';
import { DisplayInputComponent } from './display-input/display-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCountryCountComponent } from './list-country-count/list-country-count.component';
const routes: Routes = [
  {
    path: '',
    component: ObtainInputComponent
  },
  {
    path: 'display/:id',
    component: DisplayInputComponent
  },
  {
    path:'countryList',
    component: ListCountryCountComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,ReactiveFormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
