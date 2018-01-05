package com.weather.app.domains;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Weather {

    public String name;

    public Object main;

    public Object weather;

    public Object wind;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Object getMain() {
        return main;
    }

    public void setMain(Object main) {
        this.main = main;
    }

    public Object getWeather() {
        return weather;
    }

    public void setWeather(Object weather) {
        this.weather = weather;
    }

    public Object getWind() {
        return wind;
    }

    public void setWind(Object wind) {
        this.wind = wind;
    }

}
