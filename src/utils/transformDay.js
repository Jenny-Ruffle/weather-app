const transformDay = (item) => {
    const tempHigh = roundNumber(item.Temperature.Maximum.Value)
    const tempLow = roundNumber(item.Temperature.Minimum.Value)
    const tempAvg = roundNumber((item.Temperature.Minimum.Value + item.Temperature.Maximum.Value) / 2)
    const date = transformDate(item.Date)
    const day = getDay(item.Date)
    const type = transformType(item.Day.IconPhrase)
    return {
        day: day,
        date: date,
        type: type,
        high: tempHigh,
        low: tempLow,
        temp: tempAvg
    }
}

function roundNumber(x) {
    return x.toFixed(0)
}

function transformDate(date) {
    const newdate = new Date(date)
    const dayOfMonth = newdate.getDate()
    const month = newdate.getMonth() + 1
    return `${dayOfMonth} / ${month}`
}

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getDay(date) {
    const newdate = new Date(date)
    const day = newdate.getDay()
    return daysOfTheWeek[day]
}

const sunny = ['Sunny', 'Mostly sunny', 'Partly sunny', 'Hazy sunshine', 'Hot']
const sunnyCloudy = ['Intermittent clouds', 'Mostly cloudy']
const cloudy = ['Cloudy', 'Dreary', 'Fog', 'Windy']
const hail = ['Ice', 'Sleet', 'Freezing rain']
const showers = ['Showers', 'Mostly cloudy w/ showers', 'Partly sunny w/ showers']
const rain = ['T-Storms', 'Mostly cloudy w/ t-storms', 'Partly sunny w/ t-storms', 'rain']
const snow = ['Cold', 'Flurries', 'Mostly cloudy w/ flurries', 'Partly sunny w/ slurries', 'Snow', 'Mostly cloudy w/ snow', 'Rain and snow']

function transformType(type) {
    if (sunny.includes(type)) {
        return 'sunny'
    } else if (sunnyCloudy.includes(type)) {
        return 'sunnyCloudy'
    } else if (cloudy.includes(type)) {
        return 'cloudy'
    } else if (hail.includes(type)) {
        return 'hail'
    } else if (showers.includes(type)) {
        return 'showers'
    } else if (rain.includes(type)) {
        return 'rain'
    } else if (snow.includes(type)) {
        return 'snow'
    }
    return 'sunnyCloudy'
}


export default transformDay