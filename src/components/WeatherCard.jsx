import { useEffect, useState } from "react";
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      setCurrentDateTime(date.toLocaleString());
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.main.temp}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>{weather.weather[0].description}</p>
      <p className="date-time">{currentDateTime}</p>
    </div>
  );
};

export default WeatherCard;
