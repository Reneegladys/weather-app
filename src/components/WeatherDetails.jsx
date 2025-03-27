const WeatherDetails = ({ weather }) => {
    return (
      <div>
        <h3>Weather Details</h3>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
        <p>Pressure: {weather.main.pressure} hPa</p>
      </div>
    );
  };
  
  export default WeatherDetails;
  