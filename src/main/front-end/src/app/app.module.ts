import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherResultComponent } from './weather-result/weather-result.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    WeatherResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
