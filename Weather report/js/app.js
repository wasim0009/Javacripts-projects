const apiKey="57611658ae1a0c21a1ee109277edf8d3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=mumbai";

async function checkWeather(){
    const response=await fetch(apiUrl + `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
}

checkWeather(); 