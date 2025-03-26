"use strict";

async function fetchPosts() {
    try {
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}.");
        const data = await response.json();
        console.log(data); // Logs the fetched posts
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPosts(); // Call the function
