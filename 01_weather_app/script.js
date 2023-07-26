// la clé provient d'OpenWeatherMap
const apikey = "d6ea594fbc640c877327abdfa033a290";

const weatherDataElement = document.getElementById("weather-data");
const cityInputElement = document.getElementById("city-input");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputElement.value;
    // console.log(cityValue);
    getWeatherData(cityValue);
});

// async function est une fonction avec un delai d'attente
async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // console.log(data);

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like : ${Math.round(data.main.feels_like)}`,
            `Humidity : ${data.main.humidity} %`,
            `Wind speed : ${data.wind.speed} m/s`,
        ];

        // innerHTML permet de changer les résultats dans index.html, ici en l'occurence l'icon
        weatherDataElement.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherDataElement.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataElement.querySelector(".description").textContent = description;
        weatherDataElement.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    }catch(error){
        weatherDataElement.querySelector(".icon").innerHTML = "";
        weatherDataElement.querySelector(".temperature").textContent = "";
        weatherDataElement.querySelector(".description").textContent = "Une erreur s'est produite, veuillez réessayez.";
        weatherDataElement.querySelector(".details").innerHTML = "";
    }
}