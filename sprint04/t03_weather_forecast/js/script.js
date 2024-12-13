async function getWeather(){
    const apiKey = `ae96a5d72a3ed0edd8f5bae30a3ceb31`;
    const cityName = `Szczecin`;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    const response = await fetch(url);
    const result = await response.json();
    display(result);
}

function display(data){
    const weatherForecast = document.getElementById("weatherForecast");
    weatherForecast.innerHTML = "";

    data.list.forEach(item => {
        let date = new Date(item.dt * 1000);
        let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        let time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        let temperature = (item.main.temp - 273.15).toFixed(0);
        let weatherType = item.weather[0].main.toLowerCase();

        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerHTML = `
            <span class="data">${dayOfWeek}</span>
            <span class="time">${time}</span>
            <img src="assets/images/${getWeatherImage(weatherType)}.png" alt="day-${dayOfWeek.toLowerCase()}">
            <span>${temperature}&#176;C</span>
        `;
        weatherForecast.appendChild(dayElement);
    });
}

function getWeatherImage(weatherType) {
    switch (weatherType) {
        case 'clear':
            return 'sun';
        case 'clouds':
            return 'blizzard';
        case 'rain':
            return 'rain';
        default:
            return 'blizzard';
    }
}

getWeather();