const date = new Date().getFullYear();
const dateElement = document.querySelector("#year");

let lastModified = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");

dateElement.innerHTML = date;
lastModifiedElement.innerHTML = lastModified;

// Toggle navigation menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '6b70cd58810743af1f00f42a0ac56a1c'; // Your OpenWeatherMap API key
const latitude = '5.1755'; // Ikot Ekpene, Nigeria latitude
const longitude = '7.7122'; // Ikot Ekpene, Nigeria longitude
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&units=imperial`;
const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
// Fetch data from the OpenWeatherMap API
async function weatherFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function forcastFetch() {
    try {
        const response = await fetch(forcastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForcast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}


// Function to display weather results
function displayWeather(data) {
    // Get references to the temperature span and figure element
    const currentTemp = document.querySelector('#current-temp');
    const weatherFigure = document.querySelector('#weather-icon');

    // Update the temperature display
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    // Create a new <img> element for the weather icon
    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Set icon source
    img.alt = data.weather[0].description; // Set alt text for accessibility
    img.width = "50";

    // Create a <figcaption> element for the weather description
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = data.weather[0].description;

    // Clear existing content in the figure to prevent duplicates
    weatherFigure.innerHTML = '';

    // Append the new <img> and <figcaption> elements to the figure
    weatherFigure.appendChild(img);
    weatherFigure.appendChild(figcaption);
}


function displayForcast(data) {
    // Array of forecast data for the first three days
    const forecastData = [
        {
            temp: data.list[0].main.temp,
            description: data.list[0].weather[0].description,
            icon: data.list[0].weather[0].icon,
            containerId: "icon1",
        },
        {
            temp: data.list[1].main.temp,
            description: data.list[1].weather[0].description,
            icon: data.list[1].weather[0].icon,
            containerId: "icon2",
        },
        {
            temp: data.list[2].main.temp,
            description: data.list[2].weather[0].description,
            icon: data.list[2].weather[0].icon,
            containerId: "icon3",
        },
    ];

    // Loop through the forecast data
    forecastData.forEach((forecast, index) => {
        // Get the container for the current forecast
        const container = document.getElementById(forecast.containerId);

        // Clear existing content in the container
        container.innerHTML = '';

        // Create and populate <p> elements for temperature and description
        const tempParagraph = document.createElement('p');
        tempParagraph.innerHTML = `Day ${index + 1}: <span>${forecast.temp}&deg;F</span>`;

        const descSpan = document.createElement('span');
        descSpan.textContent = ` ${forecast.description}`;

        tempParagraph.appendChild(descSpan);

        // Create and set up the <img> element for the weather icon
        const img = document.createElement('img');
        img.src = `https://openweathermap.org/img/wn/${forecast.icon}@2x.png`;
        img.alt = forecast.description;
        img.width = "50";

        // Append the temperature paragraph and the image to the container
        container.appendChild(tempParagraph);
        container.appendChild(img);
    });
}
forcastFetch();
weatherFetch();