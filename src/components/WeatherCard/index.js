import React from 'react'
import './index.css'
import WeatherTypeIcon from '../WeatherTypeIcon'

const WeatherCard = ({data}) => {
    const {day, date, temp, type, high, low} = data

    return (
        <div className='weather-card'>
            <p className='weather-card_prefix'>{date}</p>
            <p className='weather-card_prefix'>{day}</p>
            <h1 className='weather-card_temp'>{temp}°c</h1>
            <WeatherTypeIcon type={type} />
            <p className='weather-card_prefix'>High: {high}°c | Low: {low}°c</p>
        </div>
    )
}

export default WeatherCard