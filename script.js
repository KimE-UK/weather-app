

//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={london}&appid={af246f5aace5e2f1bcf9bf16340163c7}
// https://api.openweathermap.org/data/2.5/weather?lat={51.509865}&lon={-0.118092}&appid={af246f5aace5e2f1bcf9bf16340163c7}

// fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=af246f5aace5e2f1bcf9bf16340163c7&units=metric")
// .then(function(response){return response.json();})
// .then(function (json){
// console.log(json)
// console.log(json.name);
// console.log(json.main.temp);
// console.log(json.weather[0]);
// });

// let cityArray = ["London", "Oxford", "Birmingham", "Bristol", "Manchester", "Brighton",]

// function blank() {
//     document.getElementById().innerText = "City";
//     document.getElementById().innerText = "0" + "&deg";
//     document.getElementById().innerText = "Weather Description";
// }

fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=af246f5aace5e2f1bcf9bf16340163c7&units=metric")
    .then(function(response){
        return response.json()
    })
    .then(function (json){
    console.log(json)
    console.log(json.name);
    console.log(json.main.temp);
    console.log(json.weather[0].description);
    //call function to display the weather
    displayLondonWeather(json);
});


function displayLondonWeather(json) {
      document.querySelector('.temperature').innerHTML = json.main.temp + '&deg;';
      document.querySelector('.city-name').innerHTML = json.name;
      document.querySelector('.weather-description').innerHTML = json.weather[0].description;
}


//  Oxford Weather
// fetch("https://api.openweathermap.org/data/2.5/weather?q=oxford&appid=af246f5aace5e2f1bcf9bf16340163c7&units=metric")
//     .then(function(response){
//         return response.json()
//     })
//     .then(function (json){
//     console.log(json)
//     console.log(json.name);
//     console.log(json.main.temp);
//     console.log(json.weather[0].description);
//     //call function to display the weather
//     displayOxfordWeather(json);
// });

// function displayOxfordWeather(json) {
// document.querySelector('.temperature').innerHTML = json.main.temp + '&deg;';
// document.querySelector('.city-name').innerHTML = json.name;
// document.querySelector('.weather-description').innerHTML = json.weather[0].description;
// }
