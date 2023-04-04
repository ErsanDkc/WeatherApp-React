import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("İstanbul")
    const [weatherInfo, setWeatherInfo] = useState()
    
    useEffect(() => {
        const api = "7e6f8f937ae7c56b66e9105a50007ff8"
        const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${api}` 
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