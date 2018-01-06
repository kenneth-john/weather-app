import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.css']
})
export class WeatherResultComponent implements OnInit {

  weather: any ;

  gotData = false;

  constructor(private weatherService: WeatherService,
              private router: Router) { }

  ngOnInit() {
    let showView= this.weatherService.showDetails;

    if(!showView){
      this.router.navigate([""]);
    }

    this.weatherService.currentWeather.subscribe(
      (weather) => {
        this.weather = weather;
        this.gotData = true;
      }
    );
  }

}
