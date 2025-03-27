"use strict";

async function fetchWeather() {
    const city = document.getElementById("city").value.trim(); // Get city name

    if (!city) {
        alert("Please enter a city.");
        return;
    }

    try {
        // Fetch the API key from the server
        const apiKeyResponse = await fetch('/get-api-key', { method: 'POST' });
        const apiKeyData = await apiKeyResponse.json();
        const apiKey = apiKeyData.message; // Get the API key from the response

        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Weather Data:", data); // Debugging log

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not fetch weather. Please check the city name or try again later.");
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById("weather-info");
    weatherContainer.innerHTML = `
        <div class="mt-6 bg-white p-4 rounded-xl shadow-md text-center">
            <h2 class="text-xl font-bold">${data.location.name}, ${data.location.country}</h2>
            <p class="text-lg">🌡️ Temperature: ${data.current.temp_c}°C</p>
            <p class="text-lg">☁️ Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon" class="mx-auto">
        </div>
    `;
}
