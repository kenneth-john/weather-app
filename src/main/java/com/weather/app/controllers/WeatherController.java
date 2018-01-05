package com.weather.app.controllers;

import com.weather.app.domains.Weather;
import com.weather.app.services.WeatherService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class WeatherController {

    WeatherService weatherService ;

    public WeatherController(WeatherService weatherService){
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public Weather getWeather(@RequestParam("zip") String zipCode){
        return this.weatherService.getWeather(zipCode);
    }

}
