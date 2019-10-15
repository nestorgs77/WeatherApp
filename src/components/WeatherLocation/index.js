//Importando desde la libreria React
import React from 'react'; 
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeatherTemperature from './WeatherData/WeatherTemperature';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';

import {
    CLOUD,
    RAIN,
    CLOUDY,
    WINDY,
    SUN,
    SNOW,

  } from '../../constants/weathers'

const data ={
 temperature: 5,
 weatherState: SUN, 
humidity :10 , 
wind : 25,
}

//import PropTypes from 'prop-types';

//Creando el componente llamado WeatherLocation
const WeatherLocations =  () => (
<div className="weatherLocationCont" >
     <Location city={"Barcelona"}></Location>
     <WeatherData data={data}></WeatherData>
    
</div>
    
);

//Esta linea de abajo indica que puedes invocar este componente desde cualquier parte de la aplicacion 
export default WeatherLocations ; 