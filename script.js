let locationElement = document.getElementById("location");
let temperatureElement = document.getElementById("temperature");
let descriptionElement = document.getElementById("description");
let iconElement = document.getElementById("icon");

async function getWeatherData() {
    try {
        const data = await fetchWeatherData();
        updateWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function updateWeather(data) {
    locationElement.textContent = data.location;
    temperatureElement.textContent = `${data.temperature}°C`;
    descriptionElement.textContent = data.description;
    iconElement.src = data.icon;
}

const weatherData = {
    location: "São Paulo, Brasil",
    temperature: 25,
    description: "Ensolarado",
    icon: "https://openweathermap.org/img/wn/01d.png"
};

updateWeather(weatherData);

console.log("Weather data updated:", weatherData);
alert("Weather data updated: " + JSON.stringify(weatherData));

export { updateWeather, weatherData };
export default { updateWeather, weatherData };

function fetchWeatherData() {
    // Simulação de uma chamada de API para obter dados do clima
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                location: "Rio de Janeiro, Brasil", 
                temperature: 30,
                description: "Parcialmente nublado",
                icon: "https://openweathermap.org/img/wn/02d.png"
            };
            resolve(data);
        }, 2000);
    });

    fetchWeatherData().then(data => {
        updateWeather(data);
    }   

}   