const WeatherCard = ({ weather }) => {
    return (
      <div>
        <h2>{weather.name}</h2>
        <p>{weather.main.temp}°C</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
      </div>
    );
  };
  
  export default WeatherCard;
  