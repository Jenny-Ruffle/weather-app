import React from 'react';
import TestRenderer from 'react-test-renderer';
import ThreeDayPage from '../index.js';
import data from '../../../data/mockAccuWeatherData.json'
import { ForecastContext } from "../../../App";


test("3 day forecast page render", () => {
    const newSnapshot = new TestRenderer.create(
        <ForecastContext.Provider value={data}>
            <ThreeDayPage />
        </ForecastContext.Provider>
    ).toJSON();
    expect(newSnapshot).toMatchSnapshot();
});
