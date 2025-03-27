const Forecast = ({ forecast }) => {
    const dailyForecasts = forecast.list.filter((_, index) => index % 8 === 0);
  
    return (
      <div>
        <h3>5-Day Forecast</h3>
        {dailyForecasts.map((day, index) => (
          <div key={index}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Min: {day.main.temp_min}°C / Max: {day.main.temp_max}°C</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default Forecast;
  