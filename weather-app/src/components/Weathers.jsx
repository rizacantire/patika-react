import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  Input,
} from "reactstrap";
import { useWeather } from "../contexts/WeatherContext";
import "./weather.css"

export default function Weathers() {
  const { weathers, selectedCity, setSelectedCity, cities } = useWeather();
  const [loading,setLoading] = useState(true);
  const choiceCity = (e) => {
    e.target.value !== "" && setSelectedCity(e.target.value);
    setLoading(false)
  };

  return (
    <div className="mt-4">
      Seçilen Şehir : {selectedCity}
      <p />
      <Input
        onChange={choiceCity}
        style={{ width: "150px", margin: "auto" }}
        id="city"
        name="city"
        type="select"
      >
        <option value=""></option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Input>
      <br />
      <CardGroup className="container">
       
      {weathers === undefined
          ? ""
          : weathers.map((weather) => (
              <Card  active="true" className="m-1 b-1 b-card" key={weather.dt}>
                <CardBody>
                  <CardTitle tag="h6">
                    {new Date(weather.dt * 1000).toLocaleString("tr-tr", {
                      weekday: "short",
                    })}
                  </CardTitle>
                  <CardImg
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />

                  <CardSubtitle>{weather.temp.min}°C &nbsp; {weather.temp.max}°C</CardSubtitle>
                  <CardText>{weather.weather[0].description}</CardText>
                </CardBody>
              </Card>
            ))}
      </CardGroup>
    </div>
  );
}
