import React from 'react'
import WeatherCard from '../../components/WeatherCard'
import FlexContainer from '../../components/FlexContainer'
import data from '../../data'

const ThreeDayForecast = () => {
    const threeDaysData = data.slice(0,3)
    return (
        <div>
            <h3 className='page-heading'>3 day forecast</h3>
            <FlexContainer>
                {threeDaysData.map((item)=><WeatherCard data={item}/>)}
            </FlexContainer>
        </div>
    )
}

export default ThreeDayForecast