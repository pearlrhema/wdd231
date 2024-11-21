document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const url = 'https://pearlrhema.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards'); // The container for business cards

// Function to fetch and display business data
async function getBusinessData() {
    // Fetch the JSON data
    const response = await fetch(url);

    const data = await response.json();

    // Access the "businesses" array from the JSON data
    const businesses = data.businesses;
    // console.log(businesses);

    // Loop through each business and create cards
    businesses.forEach(business => {
        // Create card container
        const card = document.createElement('div');
        card.classList.add('business-card');

        // Business image
        const img = document.createElement('img');
        img.src = business.image;
        img.alt = `${business.name} Logo`;

        // Business name
        const name = document.createElement('h2');
        name.textContent = business.name;

        // Business description
        const description = document.createElement('p');
        description.textContent = business.description;

        // Business address
        const address = document.createElement('p');
        address.innerHTML = `<strong>Address:</strong> ${business.address}`;

        // Business phone
        const phone = document.createElement('p');
        phone.innerHTML = `<strong>Phone:</strong> ${business.phone}`;

        // Business website link
        const website = document.createElement('a');
        website.href = business.website;
        website.target = '_blank';
        website.textContent = 'Visit Website';

        // Membership level badge
        const membershipLevel = document.createElement('span');
        membershipLevel.classList.add(`membership-level-${business.membershipLevel}`);
        membershipLevel.textContent = ['Member', 'Silver', 'Gold'][business.membershipLevel - 1];

        // Append all elements to the card container
        card.appendChild(img);
        card.appendChild(name);
        // card.appendChild(membershipLevel);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        // Add the card to the #card container
        cards.appendChild(card);
    });
}

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
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

    // Call the function to fetch and display data
getBusinessData();