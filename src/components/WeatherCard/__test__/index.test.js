import React from 'react';
import { render } from '@testing-library/react';
import WeatherCard from './index.js';

test('renders learn react link', () => {
  const { getByText } = render(<WeatherCard />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
