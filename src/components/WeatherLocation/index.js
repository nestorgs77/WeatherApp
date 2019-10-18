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

   const location = "Buenos Aires,ar";
   const api_key = "fc0e39618f16ec2d7d35e090c5989368";
   const url_base_weather = "api.openweathermap.org/data/2.5/forecast";

   const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

const data ={
 temperature: 5,
 weatherState: SUN, 
humidity :10 , 
wind : 25,
}
const data2 ={
  temperature: 10,
  weatherState: WINDY, 
 humidity :30 , 
 wind : 50,
 }

//import PropTypes from 'prop-types';

//Creating a kind component called class component and rendering !!!
//In React there are two kind of component , 1- Class Component and 2- Functional Component
class WeatherLocations extends Component {
    
  constructor (){
  super ();
  this.state = {
     city : "Buenos Aires" , 
     data : data ,
}

  

  }
  handleUpdate =()=> {
    fetch(api_weather);
    console.log("Actualizado ");
    this.setState({
      city:"Madrid" , 
      data:data2 ,
    })
  }

render () {
//Using Destructuring
const {city , data}= this.state;
  return (<div className="weatherLocationCont" >
  <Location city={city}></Location>
  <WeatherData data={data}></WeatherData>
 <button onClick = {this.handleUpdate}>Actualizar</button>
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