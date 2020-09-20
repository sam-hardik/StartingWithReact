import React,{useState  } from "react";
import './Currentweather.css'
const Currentweather= ()=>{
    const api={
        key_for_weather_api:"Your_API_Key",
        baseurl_for_weather_api:"https://api.openweathermap.org/data/2.5/",
        key_for_geolocation_api:"",
        baseurl_for_geolocation_api:"",
    }
    const [weather,fWeatherState]=useState({});
    const[searchquery,setQuery]=useState("")

    const search=(ev)=>{
        if(ev.key==="Enter"){
        fetch(`${api.baseurl_for_weather_api}weather?q=${searchquery}&units=metric&APPID=${api.key_for_weather_api}`)
        .then(res=>res.json())
        .then(result=>
            {   
                fWeatherState(result)
                setQuery("")
                //console.log(result);
            })
                
        }

    }
    return(
        <>
            <div id='weather-head'>AccuWeather App</div>
            <div className='align-center'><input type='text'
            placeholder='Search by City Name' 
            onChange={e=>setQuery(e.target.value)}
            value={searchquery} 
            onKeyPress={search} 
            className='search-box'></input></div>
            <div>
            {typeof weather.main !="undefined" ? (
            <div>
            <div className='align-center'>{weather.name}, {weather.sys.country}
            <div id='temp'>High : {Math.round(weather.main.temp_max)} °C | Low : {Math.round(weather.main.temp_min)} °C</div>
            <div id='current-temp'>{Math.round(weather.main.temp)} °C</div>
            <div id='feels-like'>feels like : {Math.round(weather.main.feels_like)}°C</div>
            <div id='current-condition'>{weather.weather[0].main}</div>
            </div>
            </div>
            ) : ("")}
            </div>
        </>
    )
}
export default Currentweather; 