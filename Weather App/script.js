document.getElementById("search-button").addEventListener("click",()=>{
    let cityName = document.getElementById("input").value
    console.log(cityName)
    let cityData = fetchWeather(cityName)
    cityData.then((data)=>{
        console.log(data)
        document.getElementById("city-name").innerText=data.name;
        document.getElementById("current-temp").innerHTML=`${data.main.temp}<sup style="font-size:40px">o</sup>C`;
        let date = new Date()
        document.getElementById("current-date").innerText=date.toLocaleDateString();
    })
    cityData.catch((e)=>{
        console.log(e)
    })
})

async function fetchWeather(cityName){
   try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=894693f36e8238ad2e5e6ab70160baac&units=metric`);
    let cityWeather = await response.json();
    return cityWeather;
   } catch (error) {
    console.log(error)
   }
}
