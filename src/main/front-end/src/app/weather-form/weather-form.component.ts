import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  invalidZip: boolean = false;

  constructor(private weatherService: WeatherService,
              private router: Router) {}

  ngOnInit() {}

  isZipValid(zip){
    if(zip.value.length != 5){
      this.invalidZip = true;
    }
    else{
      this.invalidZip = false;
    }
  }

  getWeather(weatherForm: NgForm) {
    if(!this.invalidZip){
      let zipCode = weatherForm.value.zipCode;
      this.weatherService.showDetails = true;
      this.weatherService.sendZipCode(zipCode);
      this.router.navigate(["weather"]);
    }else {
      this.router.navigate([""]);
    }    
  }
  
}
