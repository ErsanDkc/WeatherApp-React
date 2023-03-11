import React, { useRef} from 'react'
import { useWeather } from '../context/WeatherContext'
function Form() {
    const {setCity} = useWeather()
    const inputRef = useRef(null)
    
    const handleSubmit = (e) =>  {
      e.preventDefault()
      console.log(inputRef.current.value)
      setCity(inputRef.current.value)
    //  inputRef.current.value = ""
      setTimeout(()=> {
        inputRef.current.value = ""
      },500)
    };
    
    
  return (
    <div>
        <form onSubmit={handleSubmit} className="form" >
          <input type="text" ref={inputRef} autoFocus />
          <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Form