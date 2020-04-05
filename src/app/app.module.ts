import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObtainInputComponent } from './obtain-input/obtain-input.component';
import { DisplayInputComponent } from './display-input/display-input.component';
import { DataServiceService } from './data-service.service';
import { RouterModule, Routes} from '@angular/router';
import {DropdownDirectives} from './shared/dropdown.directives';
@NgModule({
  declarations: [
    AppComponent,
    ObtainInputComponent,
    DisplayInputComponent,
    DropdownDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule,
    
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
