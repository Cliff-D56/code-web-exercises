const BASE_FORECAST_URL=`https://api.openweathermap.org/data/2.5/forecast?&appid=${OPEN_WEATHER_APPID}&`

//CREATES MAP
mapboxgl.accessToken = MAPBOX_API_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    // center: [-98.4916, 29.4252]
});

//WEATHER ARRAYS
let thunderstorm =["thunderstorm with light rain", "thunderstorm with rain","thunderstorm with heavy rain","light thunderstorm","thunderstorm","heavy thunderstorm", "ragged thunderstorm","thunderstorm with drizzle","thunderstorm with light drizzle","thunderstorm with heavy drizzle"]
let drizzle =["light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain","shower rain and drizzle","heavy shower rain and drizzle","shower drizzle"]
let rain =["light rain", "moderate rain","heavy intensity rain","very heavy rain","extreme rain","freezing rain","light intensity shower rain","shower rain","heavy intensity shower rain","ragged shower rain"]
let snow =["light snow","snow","heavy snow","sleet","light shower sleet","shower sleet","light rain and snow","rain and snow","light shower snow","shower snow","heavy shower snow"]
let mist =["mist","smoke","haze","sand/dust whirls","fog","sand","dust","volcanic ash","squalls","tornado"]
let clouds =["few clouds","scattered clouds","broken clouds","overcast clouds","clear sky"]

//GETS WEATHER BASED ON LAT AND LONG THEN RETURNS CARDS
let weathersearch =(lat,lng)=>{
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_APPID}`).done((data)=>{
        let html = "";
        let weathericon;
        for (let i = 0; i < 40; i+=8) {
            let temp = (data.list[i].main.temp-273.15)*(9/5)+32;
            let ftemp =(data.list[i].main.feels_like-273.15)*(9/5)+32;
            weathericon = weatherswitch(data,i)

            html += `<div class="card" style = "width: 16rem;">`
            html += `<div class="card-header">Date: ${data.list[i].dt_txt}</div>`
            html += `<div class="list-group-item" style="width: 254px;height: 80px;font-size: 14px;text-align: center" >Temperature: ${temp.toFixed()}°F/Feels like: ${ftemp.toFixed()}°F<img src="${weathericon}"class= "card-img-top"alt="hi" style="width: 40px;height: 40px;position: relative;"></div>`
            html += `<ul class="list-group list-group-flush">`
            html += `<li class="list-group-item">Humidity: ${data.list[i].main.humidity}%</li>`
            html += `<li class="list-group-item">Weather Description: ${data.list[i].weather[0].description}</li>`
            html += `<li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>`
            html += `<li class="list-group-item">Wind Speed(meters per second): ${data.list[i].wind.speed}</li>`
            html += `</ul>`
            html += `</div>`
        }
        // html += `</div>`
        $("#insert-weather").html(html)
    })
}

//SEARCHES ADDRESS AND USES WEATHER SEARCH FUNCTION
let geosearch =()=>{
    geocode(mapInfo.address, MAPBOX_API_TOKEN).then(function (result){
        map.setCenter(result)
        weathersearch(result[1],result[0])
    })
}

//WEATHER SWITCH FUNCTION
let weatherswitch =(data,i)=>{
    let weathericon="";
    switch (true){
        case (thunderstorm.includes(data.list[i].weather[0].description)):
            weathericon = "http://openweathermap.org/img/wn/11d@2x.png"
            break;
        case (clouds.includes(data.list[i].weather[0].description)):
            weathericon = "https://openweathermap.org/img/wn/04d@2x.png"
            break;
        case (drizzle.includes(data.list[i].weather[0].description)):
            weathericon = "https://openweathermap.org/img/wn/09d@2x.png"
            break;
        case (rain.includes(data.list[i].weather[0].description)):
            weathericon = "https://openweathermap.org/img/wn/10d@2x.png"
            break;
        case (snow.includes(data.list[i].weather[0].description)):
            weathericon = "https://openweathermap.org/img/wn/13d@2x.png"
            break;
        case (mist.includes(data.list[i].weather[0].description)):
            weathericon = "https://openweathermap.org/img/wn/50d@2x.png"
            break;
    }
    return weathericon
}

// SETS STARTUP LOCATION
reverseGeocode({lng: -95.2622, lat: 29.9988}, MAPBOX_API_TOKEN).then(function(results) {
    geocode(results, MAPBOX_API_TOKEN).then(function(result) {
        map.setCenter(result);
        map.setZoom(10);
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(Spades/img/sketch.png)`;
        el.style.width = `25px`;
        el.style.height = `50px`;
        el.style.backgroundSize = '100%';
        let marker = new mapboxgl.Marker(el,{draggable:true})
            .setLngLat(result)
            .addTo(map)
    });
});

//SEARCH ADDRESS
let mapInfo = {
    address: "903 E Commerce St, San Antonio, TX 78205",
}

//CREATES MARKER IN SEARCH
function placeMarkerAndPopup(info, token, map) {

    geocode(info.address, token).then(function(coordinates) {
        let popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);

        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(Spades/img/sketch.png)`;
        el.style.width = `25px`;
        el.style.height = `50px`;
        el.style.backgroundSize = '100%';
        // popup.addTo(map);
        new mapboxgl.Marker(el,{draggable:true})
            .setLngLat(coordinates)
            // .setPopup(popup)
            .addTo(map);
    });
}

//CHANGE ZOOM LEVEL
document.getElementById("search3").addEventListener("change",function (){
    map.setZoom(document.getElementById("search3").value)
})

//SEARCH FUNCTION
document.getElementById("search1").addEventListener("click",function (){
    mapInfo.address = document.getElementById("search").value;
    geosearch()
    $(".mapboxgl-marker-anchor-center").addClass("invisible")
    placeMarkerAndPopup(mapInfo, MAPBOX_API_TOKEN, map);
})

//STARTING SEARCH
$.get(BASE_FORECAST_URL+`q=Humble, TX,USA`).done((data)=>{
    let html = "";
    let weathericon="";
    for (let i = 0; i < 40; i+=8) {
        let temp = (data.list[i].main.temp-273.15)*(9/5)+32;
        let ftemp =(data.list[i].main.feels_like-273.15)*(9/5)+32;
        weathericon = weatherswitch(data,i)

        html += `<div class="card" style = "width: 16rem;">`
        html += `<div class="card-header">Date: ${data.list[i].dt_txt}</div>`
        html += `<div class="list-group-item" style="width: 254px;height: 80px;font-size: 14px;text-align: center" >Temperature: ${temp.toFixed()}°F/Feels like: ${ftemp.toFixed()}°F<img src="${weathericon}"class= "card-img-top"alt="hi" style="width: 40px;height: 40px;position: relative;"></div>`
        html += `<ul class="list-group list-group-flush">`
        html += `<li class="list-group-item">Humidity: ${data.list[i].main.humidity}%</li>`
        html += `<li class="list-group-item">Weather Description: ${data.list[i].weather[0].description}</li>`
        html += `<li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>`
        html += `<li class="list-group-item">Wind Speed(meters per second): ${data.list[i].wind.speed}</li>`
        html += `</ul>`
        html += `</div>`
    }
    $("#insert-weather").html(html)
})

//NEW MARKER ON CLICK
map.on('click', (e) => {
    // JSON.stringify(e.lngLat.wrap());
    $(".mapboxgl-marker-anchor-center").addClass("invisible")
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(Spades/img/sketch.png)`;
    el.style.width = `25px`;
    el.style.height = `50px`;
    el.style.backgroundSize = '100%';
    new mapboxgl.Marker(el,{draggable:true})
        .setLngLat([e.lngLat.lng,e.lngLat.lat])
        .addTo(map);
    weathersearch(e.lngLat.lat,e.lngLat.lng)
})

//STOPS REFRESH OF PAGE
let form = document.getElementById("searchform");
form.addEventListener("click",function (e){
    e.preventDefault()
})
