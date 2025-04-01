import { useEffect, useState } from "react";
import { getWeatherByCoords, getForecastByCoords } from "./services/WeatherService";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import Favorites from "./components/Favorites";
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const weatherData = await getWeatherByCoords(latitude, longitude);
      const forecastData = await getForecastByCoords(latitude, longitude);
      setWeather(weatherData);
      setForecast(forecastData);
    });
  }, []);

  
  const addCurrentLocationToFavorites = () => {
    if (weather && !favorites.includes(weather.name)) {
      const updatedFavorites = [...favorites, weather.name];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeCurrentLocationFromFavorites = () => {
    if (weather && favorites.includes(weather.name)) {
      const updatedFavorites = favorites.filter(city => city !== weather.name);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="app-container">
      <div className="searchbar-container">
        <SearchBar setWeather={setWeather} setForecast={setForecast} />
      </div>

      <div className="weather-card-container">
        {weather && <WeatherCard weather={weather} favorites={favorites} addCurrentLocationToFavorites={addCurrentLocationToFavorites} removeCurrentLocationFromFavorites={removeCurrentLocationFromFavorites} />}
        <div className="favorites-container">
          <Favorites favorites={favorites} setWeather={setWeather} setForecast={setForecast} setFavorites={setFavorites} />
        </div>
      </div>

      <div className="forecast-container">
        {forecast && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
};

export default App;
