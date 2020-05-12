import React from 'react'
import WeatherCard from '../../components/WeatherCard'
import FlexCarousel from '../../components/FlexCarousel'
import {useForecastContext} from '../../App'
import transformDay from '../../utils/transformDay'

const FiveDayForecastPage = () => {
    const forecast = useForecastContext();
    const fiveDaysData = forecast.DailyForecasts
    return (
        <div>
            <h3 className='page-heading'>5 day forecast</h3>
            <FlexCarousel>
                {fiveDaysData.map((item, index)=><WeatherCard key={index} data={transformDay(item)}/>)}
            </FlexCarousel>
        </div>
    )
}

export default FiveDayForecastPage