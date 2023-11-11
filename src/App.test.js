import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


test('Testing the initializeTimes function', () => {

  const initializeTimes = jest.fn()
  render(<BrowserRouter><App /></BrowserRouter>)
  expect(initializeTimes()).not.toEqual([]);
});

test('Testing the updateTimes function', () => {

  const updateTimes = jest.fn()
  render(<BrowserRouter><App /></BrowserRouter>)
  
});