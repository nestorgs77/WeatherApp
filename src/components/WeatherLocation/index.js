//Importando desde la libreria React
import React from 'react'; 
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
//import PropTypes from 'prop-types';
//import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
//import WeatherTemperature from './WeatherData/WeatherTemperature';
//Creando el componente llamado WeatherLocation
const WeatherLocations =  () => (
<div className="weatherLocationCont" >
     <Location city={"Barcelona"}></Location>
     <WeatherData></WeatherData>
    
</div>
    
);

//Esta linea de abajo indica que puedes invocar este componente desde cualquier parte de la aplicacion 
export default WeatherLocations ; 