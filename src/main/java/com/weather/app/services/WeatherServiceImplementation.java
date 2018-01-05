package com.weather.app.services;

import com.weather.app.domains.Weather;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class WeatherServiceImplementation implements WeatherService {

    RestTemplate restTemplate = new RestTemplate();

    private String getWeatherApiEndpoint(String zipCode) {
        String url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip="+
                     zipCode +
                     ",us&appid=cdc4e8c18f5a5efbee164f81c736df21";
        return url;
    }

    @Override
    public Weather getWeather(String zipCode) {
        Weather weather =  this.restTemplate.getForObject(this.getWeatherApiEndpoint(zipCode), Weather.class);
        return weather;
    }
}
