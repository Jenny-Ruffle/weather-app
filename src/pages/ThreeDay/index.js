import React, { useContext } from "react";
import WeatherCard from "../../components/WeatherCard";
import FlexContainer from "../../components/FlexContainer";
import { ForecastContext } from "../../App";
import transformDay from '../../utils/transformDay'

const ThreeDayForecastPage = () => {
  const forecast = useContext(ForecastContext);
  const threeDaysData = forecast.DailyForecasts.slice(0,3)
  return (
    <div>
      <h3 className="page-heading">3 day forecast</h3>
      <FlexContainer>
        {threeDaysData.map((item, index) => (
          <WeatherCard key={index} data={transformDay(item)} />
        ))}
      </FlexContainer>
    </div>
  );
};

export default ThreeDayForecastPage;
