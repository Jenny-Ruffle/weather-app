import React from 'react'
import sunnyCloudy from '../../svgs/sun-cloud.svg'
import sunny from '../../svgs/day.svg'
import hail from '../../svgs/hail.svg'
import rain from '../../svgs/rain.svg'
import showers from '../../svgs/light-showers.svg'
import night from '../../svgs/night.svg'
import snowy from '../../svgs/snowy.svg'
import cloudy from '../../svgs/cloudy.svg'

const icons = {
    sunnyCloudy: sunnyCloudy,
    sunny: sunny,
    hail: hail,
    showers: showers,
    night: night,
    snowy: snowy,
    rain: rain,
    cloudy: cloudy
}

const WeatherTypeIcon = ({type}) => {
    const iconType = type
    const iconSrc = icons[iconType]
    return <img alt='weather-svg' src={iconSrc}/>
}

export default WeatherTypeIcon