import React from 'react';
import TestRenderer from 'react-test-renderer';
import WeatherCard from '../index.js';

const mockData = {
    day: 'Monday',
    date: '11/05',
    temp: '13',
    type: 'cloudy',
    high: '14',
    low: '8'
}

describe('Weather card', () => {
    it('matches the snapshot', () => {
        const newSnapshot = TestRenderer.create(<WeatherCard data={mockData} />).toJSON();
        expect(newSnapshot).toMatchSnapshot();
    });
  });