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
const WeatherData =()=> (

    <div className ="weatherDataCont">
        <WeatherTemperature  temperature ={20} 
        weatherState = {CLOUD}
        />

        <WeatherExtraInfo Humidity = {80} Wind={10}/>
         </div>
    
); 
export default WeatherData ; 