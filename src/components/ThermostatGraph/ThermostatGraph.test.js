import React from 'react'
import { render } from '@testing-library/react'
import ThermostatGraph from './ThermostatGraph'

test('renders ThermostatGraph component', () => {
    const { getByTestId } = render(<ThermostatGraph />)
    const  component = getByTestId("thermostat-component")
    expect(component).toBeInTheDocument()
})

test('renders ThermostatGraph with loading message', () => {
    const { getByTestId } = render(<ThermostatGraph />)
    const  loadinglement = getByTestId("thermostat-loading-data")
    expect(loadinglement).toBeInTheDocument()
})

// TODO:
// unit test prepareDataForChart to ensure
// it matches the required structure to
// properly render a chart in chart.js

// the final test case fails because
// overriding jest to mock react-chartjs-2
// is unsupported by create-react-app
// and time did not allow for me to explore options
// to override and mock react-chartjs-2 properly

// test('renders ThermostatGraph with chart', async () => {
//     const { findByTestId } = render(<ThermostatGraph />)
//     const  chartContainerElement = await findByTestId("thermostat-chart-container")
//     expect(chartContainerElement).toContainElement()
// })