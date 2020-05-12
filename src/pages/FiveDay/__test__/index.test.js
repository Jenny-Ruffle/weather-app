import React from 'react';
import TestRenderer from 'react-test-renderer';
import FiveDayPage from '../index.js';
import data from '../../../data/mockAccuWeatherData.json'
import { ForecastContext } from "../../../App";

test("5 day forecast page render", () => {
    const newSnapshot = new TestRenderer.create(
        <ForecastContext.Provider value={data}>
            <FiveDayPage />
        </ForecastContext.Provider>
    ).toJSON();
    expect(newSnapshot).toMatchSnapshot();
});
