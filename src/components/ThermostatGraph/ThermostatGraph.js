import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import './ThermostatGraph.css'

const  ThermostatGraph = () => {
  const [thermostatData, setThermostatData] = useState()

  useEffect(() => {
    const API_URL = 'https://raw.githubusercontent.com/ParityInc/backend-assignment/master/thermostat.json'
    const fetchThermostatData = async (url) => {
      const resp = await axios(url)
      setThermostatData(resp.data)
    }
    fetchThermostatData(API_URL)
  }, [])

  return (
    <section className="ThermostatGraph">
      <h2>Thermostat Data</h2>
      <p>display a graph with the temperature, outside temperature and temperature set point of the thermostat over time</p>
      {thermostatData ?
      <div>
        <p>has data</p>
        <ul>
          {thermostatData.point_data[0].graph_data.map(item => (
            <li key={item.x}>{item.actual}</li>
          ))}
        </ul>
      </div> :
      <div>Loading Thermostat Data...</div>}
    </section>
  );
}

export default ThermostatGraph