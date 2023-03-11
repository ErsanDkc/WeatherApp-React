import React, { useRef, useState } from 'react'
import { useWeather } from '../context/WeatherContext'
function Form() {
    const {city,setCity} = useWeather()
    const inputRef = useRef(null)
    
    const handleSubmit = (e) =>  {
      e.preventDefault()
      console.log(inputRef.current.value)
      setCity(inputRef.current.value)
    };
    
    
  return (
    <div>
        <form onSubmit={handleSubmit} >
          <input type="text" ref={inputRef} />
          <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Form