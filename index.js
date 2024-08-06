

async function fetchData() {
    try {
        const long = parseFloat(document.getElementById("longitude-input").value);
        const lat = parseFloat(document.getElementById("latitude-input").value);
        const apiKey = `7d03b20e30b9f7d0d8d0779177dd7098`;
    
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
        const response = await fetch(baseURL);
        if (!response.ok) {
            throw new Error("cannot request data");
        }
        const data = await response.json();
        console.log(data);

        const name = data.name;  // Correct access to the city name
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
        const windSpeedValue = data.wind.speed;  // Avoid naming conflict with the HTML element
        const description = data.weather[0].description;  // Access the first element of the weather array


        console.log(description);
        document.getElementById("city-name").textContent = name;
        document.getElementById("temp").textContent = temperature;
        document.getElementById("wind-speed").textContent = windSpeedValue;

        document.getElementById("weather-description").textContent = description;

        document.getElementById("weather-info").classList.remove("d-none");
    } catch(error) {
        console.error(error);
    }
    

}