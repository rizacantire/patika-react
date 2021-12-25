import axios from 'axios'

let getWeather = (city)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&APPID=927d09bc49dbee6aac7f5cb1df707542&cnt=7&lang=tr`).then(res=>{
        return res.data
    })
}

export default getWeather;