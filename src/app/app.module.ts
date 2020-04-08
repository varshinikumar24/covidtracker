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
import { ListCountryCountComponent } from './list-country-count/list-country-count.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ObtainInputComponent,
    DisplayInputComponent,
    DropdownDirectives,
    ListCountryCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule,
    
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
 
    
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}