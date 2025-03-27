import React from "react";
import { getWeatherByCity, getForecastByCoords } from "../services/WeatherService";

const Favorites = ({ favorites, setWeather, setForecast, setFavorites }) => {
  
  const handleFavoriteClick = async (city) => {
    try {
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecastByCoords(weatherData.coord.lat, weatherData.coord.lon);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  
  const removeFavorite = (city) => {
    const updatedFavorites = favorites.filter((fav) => fav !== city);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            <button onClick={() => handleFavoriteClick(city)}>{city}</button>
            <button onClick={() => removeFavorite(city)} style={{ marginLeft: "10px", color: "red" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
