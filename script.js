const apiKey = 'c23daad7bcb63181ac796515e957501f'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherButton').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    const weatherDisplay = document.getElementById('weatherDisplay');
    
    if (city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            console.log(response)
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } catch (error) {
            weatherDisplay.innerHTML = `<p>${error.message}</p>`;
        }
    } else {
        weatherDisplay.innerHTML = `<p>Please enter a city name.</p>`;
    }
});
