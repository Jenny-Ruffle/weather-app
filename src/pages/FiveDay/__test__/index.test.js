import React from 'react';
import TestRenderer from 'react-test-renderer';
import FiveDayPage from '../index.js';
import data from '../../../data'

test('5 day page matches snapshot', () => {
    const newSnapshot = TestRenderer.create(<FiveDayPage data={data} />).toJSON();
    expect(newSnapshot).toMatchSnapshot();
});