// @ts-nocheck
import React, { useState } from "react";
import search_icon from "../../assets/search.png";
import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";
import wind_icon from "../../assets/wind.png";
import humidity_icon from "../../assets/humidity.png";
const WeatherApp = () => {
  const api_key = "e2cd026067910d5feb9589391629b4c0";

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(cloud_icon);
    }
  };

  return (
    <div className="wa-container w-50 bg-success mx-auto py-2 rounded">
      <h1 className="text-center text-warning fw-bold">Weather App</h1>
      <div className="top-bar d-flex justify-content-center align-items-center gap-4 pt-4 ">
        <input
          type="text"
          placeholder="Search"
          className="cityInput w-50 text-secondary border border-none rounded-pill ps-3 fs-3"
          id="input"
        />
        <div
          className="search-icon  cursor-pointer bg-light border border-none rounded-pill px-3 py-2"
          role="button"
          onClick={() => search()}
        >
          <img src={search_icon} alt="searchIcon" className=" img-fluid" />
        </div>
      </div>
      <div className="weather-image d-flex justify-content-center mt-3">
        <img src={wicon} alt="weather-icon" className="img-fluid" />
      </div>
      <div className="weather-temp d-flex justify-content-center display-1 fw-semibold text-light">
        0°C
      </div>
      <div className="weather-location d-flex justify-content-center display-4 fw-semibold text-light">
        Location
      </div>
      <div className="data-container d-flex justify-content-center">
        <div className="element d-md-flex align-items-start m-auto gap-3">
          <img src={humidity_icon} alt="" className="icon mt-2" />
          <div className="data fs-5 fw-semibold text-light">
            <div className="humidity-percent">0%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element d-md-flex  align-items-start m-auto gap-3">
          <img src={wind_icon} alt="" className="icon mt-2" />
          <div className="data fs-5 fw-semibold text-light">
            <div className="wind-rate">0 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
