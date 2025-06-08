import React, { useState, useEffect } from "react";

function LocationData({lat, lon}) {
    
    const [temperature, setTemperature] = useState(null);
    const [weatherCode, setWeatherCode] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weatherType, setWeatherType] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");
    const [isDay, SetIsDay] = useState(false);


    useEffect(() => {
       setLoading(true);
       const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=weather_code&current=temperature_2m,rain,is_day&daily=temperature_2m_max,temperature_2m_min`;
     
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            if(data.current && data.current.temperature_2m !== undefined){
            setTemperature(Math.round(data.current.temperature_2m));
            setWeatherCode(data.current.weather_code);
            SetIsDay(data.current.is_day !== 0);
            }
            else{
              setTemperature(null);
            }
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error al obtener los datos del Weather:", err);
            setTemperature(null);
            setLoading(false);
          });
      }, [lat, lon]);

      useEffect(() => {
        switch (weatherCode) {
              case 0:
                if(!isDay){
                  setWeatherType("Clear Sky");
                  setWeatherIcon("bedtime");
                }
                else{
                setWeatherType("Clear Sky");
                setWeatherIcon("clear_day");
                }
                break;
              case 1:
                if(!isDay){
                  setWeatherType("Mainly Clear");
                  setWeatherIcon("partly_cloudy_night");
                }else{
                setWeatherType("Mainly Clear");
                setWeatherIcon("partly_cloudy_day");
                }
                break;
              case 2:
                if(!isDay){
                  setWeatherType("Partly Cloudy");
                  setWeatherIcon("partly_cloudy_night");
                }else{
                setWeatherType("Partly Cloudy");
                setWeatherIcon("partly_cloudy_day");
                }
                break;
              case 3:
                setWeatherType("Overcast");
                setWeatherIcon("cloud");
                break;
              case 45:
                setWeatherType("Fog");
                setWeatherIcon("foggy");
                break;
              case 48:
                setWeatherType("Depositing Rime Fog");
                setWeatherIcon("foggy");
                break;
              case 51:
                setWeatherType("Light Drizzle");
                setWeatherIcon("rainy_light");
                break;
              case 53:
                setWeatherType("Moderate Drizzle");
                setWeatherIcon("rainy_light");
                break;
              case 55:
                setWeatherType("Dense Drizzle");
                setWeatherIcon("rainy_heavy");
                break;
              case 56:
                setWeatherType("Light Freezing Drizzle");
                setWeatherIcon("rainy_snow");
                break;
              case 57:
                setWeatherType("Dense Freezing Drizzle");
                setWeatherIcon("rainy_snow");
                break;
              case 61:
                setWeatherType("Slight Rain");
                setWeatherIcon("rainy_light");
                break;
              case 63:
                setWeatherType("Moderate Rain");
                setWeatherIcon("rainy_heavy");
                break;
              case 65:
                setWeatherType("Heavy Rain");
                setWeatherIcon("rainy_heavy");
                break;
              case 66:
                setWeatherType("Light Freezing Rain");
                setWeatherIcon("rainy_snow");
                break;
              case 67:
                setWeatherType("Heavy Freezing Rain");
                setWeatherIcon("rainy_snow");
                break;
              case 71:
                setWeatherType("Slight Snow");
                setWeatherIcon("weather_snowy");
                break;
              case 73:
                setWeatherType("Moderate Snow");
                setWeatherIcon("weather_snowy");
                break;
              case 75:
                setWeatherType("Heavy Snow");
                setWeatherIcon("snowing_heavy");
                break;
              case 77:
                setWeatherType("Snow Grains");
                setWeatherIcon("snowing");
                break;
              case 80:
                setWeatherType("Slight Rain Showers");
                setWeatherIcon("rainy_light");
                break;
              case 81:
                setWeatherType("Moderate Rain Showers");
                setWeatherIcon("rainy_light");
                break;
              case 82:
                setWeatherType("Heavy Rain Showers");
                setWeatherIcon("rainy_heavy");
                break;
              case 85:
                setWeatherType("Slight Snow Showers");
                setWeatherIcon("weather_snowy");
                break;
              case 86:
                setWeatherType("Heavy Snow Showers");
                setWeatherIcon("weather_snowy");
                break;
              case 95:
                setWeatherType("Thunderstorm");
                setWeatherIcon("thunderstorm");
                break;
              case 96:
                setWeatherType("Thunderstorm with Slight Hail");
                setWeatherIcon("thunderstorm");
                break;
              case 99:
                setWeatherType("Thunderstorm with Heavy Hail");
                setWeatherIcon("thunderstorm");
                break;
              default:
                setWeatherType("");
                setWeatherIcon(28);
            
            }
           
      }, [weatherCode, isDay]); 
            
    
    return(
      <div className="weatherContainer">
          <h3>{loading ? "Updating the weather..." : temperature !== null ? temperature + "º" : "--"} <span className="material-symbols-outlined">{loading ? "" : weatherIcon}</span></h3>
      </div>
    )
    

}

export default LocationData;
