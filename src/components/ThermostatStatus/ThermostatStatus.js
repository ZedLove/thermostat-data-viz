import React, { useState, useEffect } from 'react'
import './ThermostatStatus.css'

const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.substring(1)
}

const  ThermostatStatus = () => {

  const STATUS = {
    OFF:    "off",
    COOL:   "cool",
    HEAT:   "heat",
    FAN_ON: "fan-on",
    AUTO:   "auto"
  }
  const [currentStatus, setCurrentStatus] = useState(STATUS.OFF)

  const handleChangeStatus = (e) => {
    e.preventDefault()
    return setCurrentStatus(STATUS[e.target.value])
  }

  return (
    <section className="ThermostatStatus">
      <h2>Thermostat Status: {capitalize(currentStatus)}</h2>
      <form >
        <label htmlFor="select-status">Select Status: </label>
        <select name="select-status" value={currentStatus} onChange={handleChangeStatus}>
          {Object.entries(STATUS).map(([k,v]) => {
            return <option value={k} key={k}>{capitalize(v)}</option>
          })}
        </select>
      </form>
    </section>
  );
}

export default ThermostatStatus