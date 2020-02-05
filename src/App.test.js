import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders application title', () => {
  const { getByText } = render(<App />)
  const titleElement = getByText(/Thermostat Data Visualization/i)
  expect(titleElement).toBeInTheDocument()
})