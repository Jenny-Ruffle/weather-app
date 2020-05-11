import React from 'react';
import TestRenderer from 'react-test-renderer';
import ThreeDayPage from '../index.js';
import data from '../../../data'

test('3 day page matches snapshot', () => {
    const newSnapshot = TestRenderer.create(<ThreeDayPage data={data} />).toJSON();
    expect(newSnapshot).toMatchSnapshot();
});