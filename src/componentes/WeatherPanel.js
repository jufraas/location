import React, { useState } from "react";

const WeatherPanel = () => {
    let urlAPI = "https://api.openweathermap.org/data/2.5/weather?appid=e0de89427249e49a3da131c7c42539e6&lang=es";
    let cityUrl = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=e0de89427249e49a3da131c7c42539e6&lang=es"

    const [weather, setWeather] = useState ( [] )
    const [forecast, setForecast] = useState ( [] )
}