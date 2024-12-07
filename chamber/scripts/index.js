document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '6b70cd58810743af1f00f42a0ac56a1c'; // Your OpenWeatherMap API key
const latitude = '5.1755'; // Ikot Ekpene, Nigeria latitude
const longitude = '7.7122'; // Ikot Ekpene, Nigeria longitude
const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&units=imperial`;
const forcastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

const dayOne = document.querySelector("#dayone");
const dayTwo = document.querySelector("#daytwo");
const dayThree = document.querySelector("#daythree");
const description1 = document.querySelector("#description1");
const description2 = document.querySelector("#description2");
const description3 = document.querySelector("#description3");



function displayForcast(data) {
    const icons = [
        `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
        `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`,
        `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`
    ];

    dayOne.innerHTML = `${data.list[0].main.temp}&deg;F`;
    dayTwo.innerHTML = `${data.list[1].main.temp}&deg;F`;
    dayThree.innerHTML = `${data.list[2].main.temp}&deg;F`;

    description1.textContent = data.list[0].weather[0].description;
    description2.textContent = data.list[1].weather[0].description;
    description3.textContent = data.list[2].weather[0].description;

    document.querySelector("#icon1").src = icons[0];
    document.querySelector("#icon1").alt = data.list[0].weather[0].description;

    document.querySelector("#icon2").src = icons[1];
    document.querySelector("#icon2").alt = data.list[1].weather[0].description;

    document.querySelector("#icon3").src = icons[2];
    document.querySelector("#icon3").alt = data.list[2].weather[0].description;
}

const url = 'https://pearlrhema.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards'); // The container for business cards

// Function to fetch and display business data
async function getBusinessData() {
    try {
        const response = await fetch('https://pearlrhema.github.io/wdd231/chamber/data/members.json');
        const data = await response.json();
        const businesses = data.businesses;

        // Filter businesses to include only Gold (3) or Silver (2) membership levels
        const filteredBusinesses = businesses.filter(
            (business) => business.membershipLevel === 2 || business.membershipLevel === 3
        );

        // Shuffle the filtered businesses
        const shuffledBusinesses = filteredBusinesses.sort(() => Math.random() - 0.5);

        // Select the first three businesses
        const selectedBusinesses = shuffledBusinesses.slice(0, 3);

        // Display the selected businesses
        displayBusinessCards(selectedBusinesses);
    } catch (error) {
        console.error("Error fetching business data:", error);
    }
}

// Function to display business cards
function displayBusinessCards(businesses) {
    cards.innerHTML = businesses.map(createBusinessCard).join('');
}

// Function to create a business card (unchanged)
function createBusinessCard(business) {
    return `
        <div class="business-card">
            <img src="${business.image}" alt="${business.name} Logo">
            <h2>${business.name}</h2>
            <p>${business.description}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <a href="${business.website}" target="_blank">Visit Website</a>
            <span class="membership-level-${business.membershipLevel}">
                ${['Member', 'Silver', 'Gold'][business.membershipLevel - 1]}
            </span>
        </div>
    `;
}

// Initialization
getBusinessData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// Toggle navigation menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Call the function to fetch and display data
getBusinessData();
forcastFetch();
weatherFetch();
