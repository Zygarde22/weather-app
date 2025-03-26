"use strict";

async function fetchWeather() {
    const city = document.querySelector("input").value.trim(); // Get city name

    if (!city) {
        alert("Please enter a city.");
        return;
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
        if (!response.ok) throw new Error("Failed to fetch weather data.");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not fetch weather. Please check the city name.");
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

// Attach event listener to button when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", fetchWeather);
});
