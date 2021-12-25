import React,{useState,useEffect} from 'react'
import WeatherService from '../services/weatherService'

export default function Weathers() {
    const [weathers, setWeathers] = useState()
    
    useEffect(() => {
        let weatherService = new WeatherService();
        weatherService.getWeathers("izmir").then(res=> setWeathers(res.data.list))
        
   }, [])
   console.log(weathers===undefined?"":((weathers[0].dt)+"000"));
    return (
        <div>
          selam
          {weathers===undefined?"":weathers.map(weather=>(
              <p >{weather.dt}</p>
          ))}
        </div>
    )
}
