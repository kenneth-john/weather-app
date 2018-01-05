package com.weather.app.services;

import com.weather.app.domains.Weather;

public interface WeatherService {
    public Weather getWeather(String zipCode);
}
