// Function to show the benefits modal with dynamic content
function showBenefitsModal(title, cost, benefits) {
    const modal = document.querySelector('#benefitsModal');
    const modalTitle = document.querySelector('#modalTitle');
    const modalCost = document.querySelector('#modalCost');
    const modalBenefits = document.querySelector('#modalBenefits');

    // Set modal content dynamically
    modalTitle.textContent = title;
    modalCost.textContent = `Cost: ${cost}`;
    modalBenefits.innerHTML = '';  // Clear any previous content

    // Add benefits as list items
    benefits.split(',').forEach(benefit => {
        const listItem = document.createElement('li');
        listItem.textContent = benefit.trim();
        modalBenefits.appendChild(listItem);
    });

    // Show the modal
    modal.style.display = 'flex';
}

// Add event listeners to all 'View Benefits' links
document.querySelectorAll('.showModal').forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault();

        // Retrieve card data attributes
        const title = card.parentElement.getAttribute('data-title');
        const cost = card.parentElement.getAttribute('data-cost');
        const benefits = card.parentElement.getAttribute('data-benefits');

        // Show the modal with the correct content
        showBenefitsModal(title, cost, benefits);
    });
});

// Close the modal when the 'X' is clicked
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('benefitsModal').style.display = 'none';
});

// Close the modal if clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === document.querySelector('#benefitsModal')) {
        document.getElementById('benefitsModal').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the current date and time
    const now = new Date();
  
    // Custom format: YYYY-MM-DD HH:mm:ss
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    // Find the hidden input field
    const timestampInput = document.getElementById('timestamp');
  
    if (timestampInput) {
      // Set the value of the hidden input field
      timestampInput.value = formattedTimestamp;
      console.log('Timestamp set:', formattedTimestamp); // Debugging log
    } else {
      console.error('Timestamp input field not found!');
    }
  });
  // Toggle navigation menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

