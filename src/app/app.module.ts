import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObtainInputComponent } from './obtain-input/obtain-input.component';
import { DisplayInputComponent } from './display-input/display-input.component';
import { DataServiceService } from './data-service.service';
import { RouterModule, Routes} from '@angular/router';
import {DropdownDirectives} from './shared/dropdown.directives';
import { ListCountryCountComponent } from './list-country-count/list-country-count.component';
import {HttpClient} from '@angular/common/http';
import { CardsDisplayComponent } from './cards-display/cards-display.component';
@NgModule({
  declarations: [
    AppComponent,
    ObtainInputComponent,
    DisplayInputComponent,
    DropdownDirectives,
    ListCountryCountComponent,
    CardsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule  
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
