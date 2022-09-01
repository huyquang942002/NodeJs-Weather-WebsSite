const request = require('request');

const forecast = (latitude,longitude,callback)=>{
        const url = 'http://api.weatherstack.com/current?access_key=3b51d1e9ddc44ab3d3665999b1be29dd&query=' + latitude +',' + longitude +'&units=f'

        request({url, json : true},(error , {body}={response})=>{
            if(error){
                callback('Unable to connect to weather service!',undefined);
            }else if(body.error){
                callback("Unable to find location!",undefined);
            }else{
                callback(undefined , body.current.weather_descriptions + ' It is currently' + body.current.temperature + ' Degress out . There is a ' + body.current.precip + ' % chance of rain');
            }
        })
}


module.exports = forecast














