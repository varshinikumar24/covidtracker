import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) {
    
  }
  getDetail() {
   return this.http.get('https://corona.lmao.ninja/countries')
 }
  getDetails(CountryId) {
   return this.http.get('https://corona.lmao.ninja/countries/'+CountryId)
 }
 
}
