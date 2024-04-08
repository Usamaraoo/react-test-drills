import React from 'react';
import { render, screen } from '@testing-library/react';
import { FirstTest } from '../components/FirstTest';

test('First Test', () => {
  render(<FirstTest />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check props value', () => {
    render(<FirstTest name="Usama"/>);
    const linkElement = screen.getByText(/Hello Usama/i);
    expect(linkElement).toBeInTheDocument();
  });
  
