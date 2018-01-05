import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  invalidZip: boolean = false;

  isZipValid(zip){
    if(zip.value.length > 5){
      this.invalidZip = true;
    }
    else{
      this.invalidZip = false;
    }
  }

  constructor() {}

  ngOnInit() {}

  getWeather(weatherForm: NgForm) {
    console.log(weatherForm);    
  }

}
