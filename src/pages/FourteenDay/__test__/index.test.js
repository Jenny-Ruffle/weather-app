import React from 'react';
import TestRenderer from 'react-test-renderer';
import FourteenDayPage from '../index.js';
import data from '../../../data'

test('14 day page matches snapshot', () => {
    const newSnapshot = TestRenderer.create(<FourteenDayPage data={data} />).toJSON();
    expect(newSnapshot).toMatchSnapshot();
});