import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import './ThermostatGraph.scss'

const  ThermostatGraph = () => {
  const [thermostatData, setThermostatData] = useState()

  const prepareDataForChart = (datasets) => {
    const backgroundColors = ['rgba(251, 209, 162, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(125, 207, 182, 0.2)',]
    const borderColors = ['rgba(251, 209, 162, 1)', 'rgba(54, 162, 235, 1)', 'rgba(125, 207, 182, 1)',]

    return Object.entries(datasets).reduce((acc, [k, ds]) => {
      // x and y axes are split into two arrays for chart.js
      const { labels, data } = Object.entries(ds.graph_data).reduce((acc, [_, d]) => {
        return {
          labels: acc.labels.concat(d.x),
          data: acc.data.concat(d.actual),
        }
      }, {
        labels: [],
        data: [],
      })

      return {
        labels,
        datasets: acc.datasets.concat({
          data,
          label: ds.name,
          backgroundColor: backgroundColors[k],
          borderColor: borderColors[k],
          borderWidth: 1,
        })
      }
    }, {
      labels: [],
      datasets: []
    })
  }

  useEffect(() => {
    const API_URL = 'https://raw.githubusercontent.com/ParityInc/backend-assignment/master/thermostat.json'
    const fetchThermostatData = async (url) => {
      const resp = await axios(url)
      setThermostatData(prepareDataForChart(resp.data.point_data))
    }
    fetchThermostatData(API_URL)
  }, [])

  return (
    <section className="ThermostatGraph" data-testid="thermostat-component">
      <h2>Thermostat Data</h2>
      {thermostatData ?
      <div data-testid="thermostat-chart-container">
        <Line data={thermostatData}></Line>
      </div> :
      <div data-testid="thermostat-loading-data">
        <h3>Loading Thermostat Data...</h3>
        <p>If a chart does not appear, please try refreshing the page.</p>
      </div>}
    </section>
  );
}

export default ThermostatGraph