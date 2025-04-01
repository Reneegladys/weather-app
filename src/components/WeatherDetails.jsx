import './WeatherDetails.css';

const WeatherDetails = ({ weather }) => {
  if (!weather || !weather.main || !weather.wind) {
    return <p>Loading weather details...</p>; 
  }

  return (
    <div className="weather-details">
      <h3>Weather Details</h3>
      <p className="highlight">Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherDetails;
