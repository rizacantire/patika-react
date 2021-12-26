import {createContext, useContext, useState,useEffect} from "react"
import WeatherService from "../services/weatherService";
import {cities} from "./AllCity"

const WeatherContext = createContext();
export const WeatherProvider = ({children})=>{
const [weathers, setWeathers] = useState();
  const [selectedCity, setSelectedCity] = useState("izmir");

  const values = {
      weathers,
      setWeathers,
      selectedCity,
      setSelectedCity,
      cities
  }
  
  useEffect(() => {
    let weatherService = new WeatherService();
    weatherService.getWeathers(selectedCity).then((res) => {
      setWeathers(res.data.list);
      
    });
  }, [selectedCity]);
  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather= ()=> useContext(WeatherContext)