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
import { ErrorComponent } from './error/error.component';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabase,AngularFireObject,AngularFireList} from '@angular/fire/database'
@NgModule({
  declarations: [
    AppComponent,
    ObtainInputComponent,
    DisplayInputComponent,
    DropdownDirectives,
    ListCountryCountComponent,
    CardsDisplayComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
