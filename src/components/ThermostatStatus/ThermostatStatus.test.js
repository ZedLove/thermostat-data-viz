import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ThermostatStatus, { capitalize, STATUS } from './ThermostatStatus'

test('renders ThermostatStatus current status indicator with initial status "off" and correct class', () => {
    const { getByTestId } = render(<ThermostatStatus />)
    const currentStatusElement = getByTestId("current-status")
    const expectedStatus = capitalize(STATUS.OFF)
    expect(currentStatusElement).toHaveTextContent(expectedStatus)
    expect(currentStatusElement.classList.contains(STATUS.OFF)).toBe(true)
})

test('changes ThermostatStatus to "Auto" and displays new status', () => {
    const { getByTestId } = render(<ThermostatStatus />)
    const selectElement = getByTestId("select-status")
    const currentStatusElement = getByTestId("current-status")

    const expectedStatus = capitalize(STATUS.AUTO)
    const newValue = expectedStatus.toUpperCase()

    fireEvent.change(selectElement, { target: { value: newValue } })
    expect(selectElement.value).toBe(newValue)

    expect(currentStatusElement).toHaveTextContent(expectedStatus)
})