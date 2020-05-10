import React from 'react'
import WeatherCard from '../../components/WeatherCard'
import FlexCarousel from '../../components/FlexCarousel'
import data from '../../data'

const FiveDayForecast = () => {
    const fiveDaysData = data.slice(0,5)
    return (
        <div>
            <h3 className='page-heading'>5 day forecast</h3>
            <FlexCarousel>
                {fiveDaysData.map((item)=><WeatherCard data={item}/>)}
            </FlexCarousel>
        </div>
    )
}

export default FiveDayForecast