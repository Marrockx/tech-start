import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IOption } from './form-page/form-page.component';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  getCountries(): Observable<IOption[]> {
    return (
      this.http
      .get<IOption[]>('https://restcountries.com/v2/all')
      .pipe(
        map((countries: IOption[]) => {
        return countries
      }),
    )
    ) 
  }


  constructor(private http: HttpClient) {
  }
}
