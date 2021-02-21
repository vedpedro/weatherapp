const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=3e536b4aca8412ee28c3ea4ff276582e'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].main + '<br>' + body.weather[0].description + '<br>' + (body.main.temp - 273.15).toFixed(2) + 'ºC')
        }
    })
}

module.exports = forecast