import React, { useState } from 'react'
import './ThermostatStatus.scss'

export function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substring(1)
}

export const STATUS = {
  OFF:    "off",
  COOL:   "cool",
  HEAT:   "heat",
  FAN_ON: "fan-on",
  AUTO:   "auto"
}

const  ThermostatStatus = () => {
  const [currentStatus, setCurrentStatus] = useState(STATUS.OFF)

  const handleChangeStatus = (e) => {
    e.preventDefault()
    return setCurrentStatus(STATUS[e.target.value])
  }

  return (
    <section className="ThermostatStatus">
      <section className="status-display">
        <h2 className="status-title">Thermostat Status:</h2>
        <h3 className={'current-status ' + currentStatus} data-testid="current-status">{capitalize(currentStatus)}</h3>
      </section>
      <form className="select-status-form">
        <label htmlFor="select-status">Select Status: </label>
        <select name="select-status" value={STATUS[currentStatus]} data-testid="select-status" onChange={handleChangeStatus}>
          {Object.entries(STATUS).map(([k,v]) => {
            return <option value={k} key={k}>{capitalize(v)}</option>
          })}
        </select>
      </form>
    </section>
  );
}

export default ThermostatStatus