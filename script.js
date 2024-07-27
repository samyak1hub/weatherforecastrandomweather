document.addEventListener("DOMContentLoaded", () => {
    const cityForm = document.getElementById('cityForm');
    const homeDiv = document.getElementById('home');
    const weatherDiv = document.getElementById('weather');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const weatherCondition = document.getElementById('weatherCondition');
    const highLow = document.getElementById('highLow');
    const goBackButton = document.getElementById('goBackButton');

    cityForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const city = document.getElementById('cityInput').value;
        
        // Simulate weather data based on the city
        const temp = Math.floor(Math.random() * 30) + 10; // Random temperature between 10°C and 40°C
        const high = temp + Math.floor(Math.random() * 5); // High temperature
        const low = temp - Math.floor(Math.random() * 5); // Low temperature
        const condition = temp > 30 ? "Hot" : temp < 20 ? "Storm" : "Clear"; // Simulated weather condition
        
        cityName.textContent = city;
        temperature.textContent = `${temp}°C`;
        weatherCondition.textContent = condition;
        highLow.textContent = `H:${high}° L:${low}°`;

        // Set the background gradient based on the weather condition
        weatherDiv.className = `weather-container weather-screen ${condition.toLowerCase()}`;
        
        homeDiv.style.display = 'none';
        weatherDiv.style.display = 'block';
    });

    goBackButton.addEventListener('click', () => {
        homeDiv.style.display = 'block';
        weatherDiv.style.display = 'none';
    });
});
