import React, { useState } from "react";
import "./weather.css";

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
export const WeatherApp = () => {
  let api_key = "9354372abc3a44e877d42454d0031660";
  const [wicon , setWicon] = useState(cloud_icon)
  //  wicon is a variable and cloud_icons is data of it and setWicon is a function

  const search = async()=>{
const element = document.getElementsByClassName("cityInput");
if(element[0].value===""){
  return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

let responce = await fetch(url);
let data = await responce.json();
const humidity = document.getElementsByClassName("humidity-percent");
const wind = document.getElementsByClassName("wind-rate");
const temprature = document.getElementsByClassName("weather-temp");
const location = document.getElementsByClassName("weather-location");

humidity[0].innerHTML = data.main.humidity +"%";
wind[0].innerHTML = data.wind.speed +"km/h";
temprature[0].innerHTML = data.main.temp+"॰c";
location[0].innerHTML = data.name;

if(data.weather[0].icon===
  "01d"||data.weather[0].icon==="01n" ){
    setWicon(clear_icon);
  }
  else if(data.weather[0].icon===
    "02d"||data.weather[0].icon==="02n" ){
      setWicon(cloud_icon);
    }
  else if(data.weather[0].icon===
    "03d"||data.weather[0].icon==="03n" ){
      setWicon(drizzle_icon);
    }
  else if(data.weather[0].icon===
    "04d"||data.weather[0].icon==="04n" ){
      setWicon(drizzle_icon);
    }
  else if(data.weather[0].icon===
    "09d"||data.weather[0].icon==="09n" ){
      setWicon(rain_icon);
    }
  else if(data.weather[0].icon===
    "10d"||data.weather[0].icon==="10n" ){
      setWicon(rain_icon);
    }
  else if(data.weather[0].icon===
    "13d"||data.weather[0].icon==="13n" ){
      setWicon(snow_icon);
    }
    else{
      setWicon(clear_icon);
    }
  }
  return (
    <div className="container">
      <div className="topbar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={()=>{search()}} >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24॰c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">19 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
