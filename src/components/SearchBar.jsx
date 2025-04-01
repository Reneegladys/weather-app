import { useState } from "react";
import { getWeatherByCity, getForecastByCoords } from "../services/WeatherService";
import './SearchBar.css'

const SearchBar = ({ setWeather, setForecast }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    const weatherData = await getWeatherByCity(city);
    const forecastData = await getForecastByCoords(weatherData.coord.lat, weatherData.coord.lon);
    setWeather(weatherData);
    setForecast(forecastData);
  };

  return (
    <div className="search-bar">
  <input
    type="text"
    placeholder="Search city..."
    value={city}
    onChange={(e) => setCity(e.target.value)}/>
  <button onClick={handleSearch}>Search</button>
</div>

  );
};

export default SearchBar;
