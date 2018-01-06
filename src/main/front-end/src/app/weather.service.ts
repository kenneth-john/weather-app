import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class WeatherService {

  public showDetails = false;

  public currentWeather = new Subject<any>();

  constructor(private http:Http,
              private router: Router) { }

  sendZipCode(zipCode: string){
    return this.http.get('/api/weather', 
    {
      params: {
        zip: zipCode
      }
    }).subscribe(
      (data)=>{
        this.currentWeather.next(data.json());
      },
      (error) => {
        this.router.navigate(["error"]);
      }
    );
  }

}
