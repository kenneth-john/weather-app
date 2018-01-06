import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { WeatherResultComponent } from './weather-result/weather-result.component';
import { WeatherService } from './weather.service';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path:"", component: WeatherFormComponent },
  { path: "error", component: ErrorPageComponent },
  { path:"weather", component: WeatherResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    WeatherResultComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
