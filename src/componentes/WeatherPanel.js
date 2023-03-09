import React, { useState } from "react";
import Form from './Form.js';
import Card from "./Card.js";

const WeatherPanel = () => {
  let urlWeather ="https://api.openweathermap.org/data/2.5/weather?appid=e0de89427249e49a3da131c7c42539e6&lang=es";
  let cityUrl = "&q=";
  let urlForecast ="https://api.openweathermap.org/data/2.5/forecast?appid=e0de89427249e49a3da131c7c42539e6&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  //aqui se controla que se pueda visualizar
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //wether
    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather).then((Response) => {
        if (!Response.ok) throw { Response };
        return Response.json();
      }).then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      }).catch((Error) => {
        console.log(Error);
        setLoading(false);
        setShow(false);
      });

    //Forecast

    urlForecast = urlForecast + cityUrl + loc;
    await fetch(urlForecast)
      .then((Response) => {
        if (!Response.ok) throw { Response };
        return Response.json();
      })
      .then((ForecastData) => {
        console.log(ForecastData);
        setForecast(ForecastData);
        setLoading(false)
        setShow(true)

      })
      .catch((Error) => {
        console.log(Error);
        setLoading(false);
        setShow(false);
      });
  };

  return(
    <React.Fragment>
      <Form 
        newLocation = {getLocation}
      />

      <Card 
        showData = {show}
        loadingData = {loading}
        weather = {weather}
        forecast = {forecast}    
      
      />
  </React.Fragment>
  );

 
};

export default WeatherPanel;
