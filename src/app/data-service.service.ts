import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) {
    
  }
  getWeatherReport() {
   return this.http.get('http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?appid={4e3aa98edbce3daa4d776178446d13d1}')
 }
  getDetails(CountryId) {
   return this.http.get('https://corona.lmao.ninja/v2/countries/'+CountryId)
 }
 getDetail() {
  return this.http.get('https://corona.lmao.ninja/v2/countries')
}

}
