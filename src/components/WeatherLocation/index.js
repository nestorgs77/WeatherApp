//Importando desde la libreria React
import React , {Component}  from 'react'; 
import PropTypes from 'prop-types';
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

//Creating a kind component called class component and rendering !!!
//In React there are two kind of component , 1- Class Component and 2- Functional Component
class WeatherLocations extends Component {
render () {
  return (<div className="weatherLocationCont" >
  <Location city={"Barcelona"}></Location>
  <WeatherData data={data}></WeatherData>
 
</div>);

}

}

    

//Validating Object date created before using the Proptype shape
WeatherData.propType = {
    data : PropTypes.shape({
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired,



    })



}

//Esta linea de abajo indica que puedes invocar este componente desde cualquier parte de la aplicacion 
export default WeatherLocations ; 