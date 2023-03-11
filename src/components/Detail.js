
import { useWeather } from '../context/WeatherContext'


function Detail() {
    const {weatherInfo} = useWeather()

    console.log(weatherInfo)
    
    
  return (
    <div>
        <div>
            {weatherInfo?.name}, {weatherInfo?.sys.country} <br /><br />
            <h1>{weatherInfo?.main.temp} <span>°C</span></h1> <br />
            {weatherInfo?.weather[0].description}{ <img src={`http://openweathermap.org/img/w/${weatherInfo?.weather[0].icon}.png`} alt="weather icon" /> }
            
        </div>
    </div>
  )

  
}

export default Detail