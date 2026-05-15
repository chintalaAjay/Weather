const apiKey = "5a30744e5c4943b48dd142400251906";

async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  if (!location) return alert("Please enter a city name!");

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById("temperature").textContent = data.current.temp_c;
    document.getElementById("city").textContent = data.location.name;
    document.getElementById("humidity").textContent = data.current.humidity;
    document.getElementById("wind").textContent = data.current.wind_kph;
    document.getElementById("weatherIcon").src = data.current.condition.icon;

    const condition = data.current.condition.text.toLowerCase();
    const body = document.getElementById("body");

    // Change background based on weather condition
    if (condition.includes("sunny")) {
      body.style.backgroundImage = "url('images/sunny.jpg')";
    } else if (condition.includes("cloud")) {
      body.style.backgroundImage = "url('images/cloudy.jpg')";
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      body.style.backgroundImage = "url('images/rainy.jpg')";
    } else if (condition.includes("snow")) {
      body.style.backgroundImage = "url('images/snow.jpg')";
    } else {
      body.style.backgroundImage = "url('images/default.jpg')";
    }

  } catch (err) {
    alert("City not found or API error!");
    console.error(err);
  }
}
