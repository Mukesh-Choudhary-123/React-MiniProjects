import React, { useState } from "react";
import SearchBox from "./Components/SearchBox";
import InfoBox from "./Components/InfoBox";
import "./Weatherwidget.css";
const Weatherwidget = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslikes: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze ",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Weather App 🌤</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default Weatherwidget;
