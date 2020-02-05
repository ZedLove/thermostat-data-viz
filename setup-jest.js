// this file is unused as the ability
// to override setupFiles for jest is
// unsupported by create-react-app.
// time did not allow for me to explore options
// to override and mock react-chartjs-2 properly
jest.mock('react-chartjs-2', () => ({Line: () => null})));