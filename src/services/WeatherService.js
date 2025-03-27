import axios from "axios";

const API_KEY = "f12077cfc4432e06fed1e3a3bc5c7452";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    `${BASE_URL}weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};

export const getForecastByCoords = async (lat, lon) => {
  const response = await axios.get(
    `${BASE_URL}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};

export const getWeatherByCity = async (city) => {
  const response = await axios.get(
    `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return response.data;
};
