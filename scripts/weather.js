// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API URL
const apiKey = '6b70cd58810743af1f00f42a0ac56a1c'; // Your OpenWeatherMap API key
const latitude = '49.7499'; // Trier, Germany latitude
const longitude = '6.6371'; // Trier, Germany longitude
const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&units=imperial`;

// Fetch data from the OpenWeatherMap API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


// Function to display weather results
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    // captionDesc.textContent = `${desc}`;
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

apiFetch();
