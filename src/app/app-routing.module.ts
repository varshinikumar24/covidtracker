import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObtainInputComponent } from './obtain-input/obtain-input.component';
import { DisplayInputComponent } from './display-input/display-input.component';

const routes: Routes = [
  {
    path: '',
    component: ObtainInputComponent
  },
  {
    path: 'display/:id',
    component: DisplayInputComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
