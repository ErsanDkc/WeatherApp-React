import { useWeather } from "../context/WeatherContext";

function Detail() {
  const { weatherInfo } = useWeather();

  console.log(weatherInfo);

  return (
    <div>
      <div className="detail">
        <div className="city">
          {weatherInfo?.name}, {weatherInfo?.sys.country}
        </div>
        <div className="temp">
          {weatherInfo?.main.temp} <span>°C</span>
        </div>
        <div className="description">
          {weatherInfo?.weather[0].description}
        </div>
        <div className="image">  
          {
            <img
              className="icon"
              src={`http://openweathermap.org/img/w/${weatherInfo?.weather[0]?.icon}.png`}
              alt="weather icon"
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Detail;
