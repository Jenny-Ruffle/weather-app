import React from 'react'
import WeatherCard from '../../components/WeatherCard'
import data from '../../data'
import FlexCarousel from '../../components/FlexCarousel'

const FourteenDayForecastPage = () => {
    const fourteenDaysData = data.slice(0,14)
    return (
        <div>
            <h3 className='page-heading'>14 day forecast - Mock data</h3>
            <FlexCarousel>
                {fourteenDaysData.map((item)=><WeatherCard data={item}/>)}
            </FlexCarousel>
        </div>
    )
}

export default FourteenDayForecastPage