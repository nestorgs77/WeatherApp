import React from 'react' ; 
import PropTypes from 'prop-types';
import './style.css';
const WeatherExtraInfo =({Humidity , Wind})=>(

<div className ="weatherExtraInfoCont">
<span className ="extraInfoText">{ `Humedad ${Humidity} %`}</span>
<span className ="extraInfoText">{`Viento ${Wind}`   }</span>

</div>

);

WeatherExtraInfo.propTypes = {

    Humidity: PropTypes.number.isRequired,
    Wind:PropTypes.number.isRequired,
}

export default WeatherExtraInfo; 