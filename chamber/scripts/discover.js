const date = new Date().getFullYear();
const dateElement = document.querySelector("#year");

let lastModified = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");

dateElement.innerHTML = date;
lastModifiedElement.innerHTML = lastModified;
// alert(document.LastModif);

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load the image
                img.removeAttribute("data-src"); // Remove the attribute
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
});

// Display Last Visit Message
const visitMessage = document.querySelector("#visit-message");

// Retrieve last visit date from localStorage
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = parseInt(lastVisit, 10);
    const timeDifference = currentVisit - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// Update localStorage with the current visit date
localStorage.setItem("lastVisit", currentVisit);

// Footer: Display Current Year and Last Modified Date
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;


// Sidebar Content for Demographics, Events, and a Simple Calendar
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");

    // Demographic and Statistical Data
    const demographics = `
        <h3>City Demographics</h3>
        <ul>
            <li>Population: 250,000</li>
            <li>Average Age: 32 years</li>
            <li>Main Industries: Agriculture, Technology, Tourism</li>
        </ul>
    `;

    // Upcoming Events
    const events = `
        <h3>Upcoming Events</h3>
        <ul>
            <li>📅 Annual Cultural Festival - July 15</li>
            <li>📅 Business Expo - August 20</li>
            <li>📅 Farmers' Market - Every Saturday</li>
        </ul>
    `;

    // Simple Calendar for Current Month
    const calendar = `
        <h3>Local Calendar</h3>
        <div id="calendar" style="font-family: Arial, sans-serif;"></div>
    `;

    // Append all content to the sidebar
    sidebar.insertAdjacentHTML("beforeend", demographics);
    sidebar.insertAdjacentHTML("beforeend", events);
    sidebar.insertAdjacentHTML("beforeend", calendar);

    // Generate Simple Calendar
    generateCalendar();
});

// Function to Generate a Simple Calendar for the Current Month
function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();

    // Create Calendar Header
    let calendarHTML = `<h4>${month} ${year}</h4>`;
    calendarHTML += `<table style="width: 100%; text-align: center; border-collapse: collapse;">
                        <thead>
                            <tr>
                                <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>
                                <th>Thu</th><th>Fri</th><th>Sat</th>
                            </tr>
                        </thead><tbody>`;

    // First day and last day of the month
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += `<td></td>`; // Empty cells before the first day
            } else if (day > lastDate) {
                calendarHTML += `<td></td>`; // Empty cells after the last date
            } else {
                calendarHTML += `<td style="padding: 5px; border: 1px solid #ddd;">${day}</td>`;
                day++;
            }
        }
        calendarHTML += "</tr>";
    }

    calendarHTML += "</tbody></table>";
    calendarContainer.innerHTML = calendarHTML;
}

  // Toggle navigation menu
  const mainnav = document.querySelector('.navigation');
  const hambutton = document.querySelector('#menu');
  
  hambutton.addEventListener('click', () => {
      mainnav.classList.toggle('show');
      hambutton.classList.toggle('show');
  });
