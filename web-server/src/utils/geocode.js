
const request = require('request');

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaHV5cXVhbmciLCJhIjoiY2w3NjB0dWwwMDZlcTNvbzVsYmZvZ3dsYiJ9.yq0gJepxaIM2xGiXMT3hOg';

    request({url,json : true},(error,{body}={response})=>{
        if(error){
            callback('Unable to connect to location service!',undefined)
        }else if(body.features.length===0){
            callback('Unable to find location , Try another search',undefined)
        }else{
            callback(undefined,{
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode;