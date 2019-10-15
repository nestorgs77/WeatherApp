import React from 'react' ;
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

  import {
    CLOUD,
    //RAIN,
    //WINDY,
   // SUN,
    //SNOW,
    //CLOUDY,

  } from '../../../constants/weathers';

  import './style.css';
const WeatherData =({data})=> {
const {temperature,weatherState,humidity,wind} = data;
  return ( <div className ="weatherDataCont">
        <WeatherTemperature  temperature ={temperature} 
        weatherState = {weatherState}
        />

        <WeatherExtraInfo Humidity = {humidity} Wind={wind}/>
         </div>
    
)


}; 
export default WeatherData ; 