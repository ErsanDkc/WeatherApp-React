import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("İstanbul")
    const [weatherInfo, setWeatherInfo] = useState()
    
    useEffect(() => {
        // const api = "3a6546994fbb0368869ce6dce2a227d0"
        const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}` 
        axios(baseURL).then(res => setWeatherInfo(res.data)).catch((e) => alert("Please Enter valid City Name"))
        
    },[city])
    
    
    const values = {
        city,
        setCity,
        weatherInfo,
        setWeatherInfo,
        
    }


    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)