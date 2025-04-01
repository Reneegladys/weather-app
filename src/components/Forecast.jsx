import './Forecast.css';

const Forecast = ({ forecast }) => {
    const dailyForecasts = forecast.list.filter((_, index) => index % 8 === 0);

    return (
      <div className="forecast">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p className="temp-range">
              Min: {day.main.temp_min}°C / Max: {day.main.temp_max}°C
            </p>
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
