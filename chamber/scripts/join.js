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
