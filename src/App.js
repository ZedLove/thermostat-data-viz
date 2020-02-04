import React from 'react'
import ThermostatGraph from './components/ThermostatGraph/ThermostatGraph'
import ThermostatStatus from './components/ThermostatStatus/ThermostatStatus'
import './App.css'

const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Thermostat Data Visualization</h1>
      </header>
      <ThermostatStatus />
      <ThermostatGraph />
    </div>
  );
}

export default App