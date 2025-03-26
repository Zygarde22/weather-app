try {
    const apiKey = "877de1e0e8b04a1ba80235309252603";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await fetch(url);

    if (!response.ok) {
        const errorText = await response.text(); // Read error response
        throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Weather Data:", data); // Debugging log

    displayWeather(data);
} catch (error) {
    console.error("Error fetching weather:", error);
    alert(`Could not fetch weather: ${error.message}`);
}
