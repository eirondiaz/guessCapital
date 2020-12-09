import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  URL: string = 'https://restcountries.eu/rest/v2/region'

  constructor(private http: HttpClient) { }

  getAmerica() {
    return this.http.get<any>(this.URL + '/americas')
  }

  getEuropa() {
    return this.http.get<any>(this.URL + '/europe')
  }

  getAsia() {
    return this.http.get<any>(this.URL + '/asia')
  }

  getAfrica() {
    return this.http.get<any>(this.URL + '/africa')
  }

  getOceania() {
    return this.http.get<any>(this.URL + '/oceania')
  }
}
