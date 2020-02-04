import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import './ThermostatGraph.css'

const  ThermostatGraph = () => {
  const [thermostatData, setThermostatData] = useState()

  const prepareDataForChart = (datasets) => {
  //   {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //     }]
  // }
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
    <section className="ThermostatGraph">
      <h2>Thermostat Data</h2>
      {thermostatData ?
      <div>
        <Line data={thermostatData}></Line>
      </div> :
      <div>
        <h3>Loading Thermostat Data...</h3>
        <p>If a chart does not appear, please try refreshing the page.</p>
      </div>}
    </section>
  );
}

export default ThermostatGraph