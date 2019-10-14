import React from 'react';
//Esta linea de abajo importo el componente desde el archivo js 
import WeatherLocations from './components/WeatherLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <WeatherLocations></WeatherLocations>
      
    </div>
  );
}

export default App;
