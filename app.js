"use strict";

async function fetchWeather() {
    const city = document.getElementById("city").value.trim(); // Get city name

    if (!city) {
        alert("Please enter a city.");
        return;
    }

    try {
         
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
