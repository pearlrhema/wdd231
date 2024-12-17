// Array of product objects
const products = [
    {
      id: '3kg',
      name: "3kg gas cylinder",
      avgRating: 4.5
    },
    {
      id: '4kg',
      name: "4kg gas cylinder",
      avgRating: 4.7
    },
    {
      id: '8kg',
      name: "8kg gas cylinder",
      avgRating: 3.5
    },
    {
      id: '10kg',
      name: "10kg gas cylinder",
      avgRating: 3.9
    },
    {
      id: '12.5',
      name: "12.5kg gas cylinder",
      avgRating: 5.0
    },
    {
      id: 'almnb',
      name: 'aluminium burner',
      avgRating: '4.2'
    },
    {
      id: 'bnt',
      name: 'burner and control',
      avgRating: 4.5
    },
    
    {
      id: 'stbr',
      name: 'stainless burner',
      avgRating: 4.3,
    },
  ];
  
  // Populate the Product Name select element
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Function to increment the review counter
  function incrementReviewCounter() {
    let reviewCounter = localStorage.getItem('reviewCounter');
    if (!reviewCounter) {
      reviewCounter = 0;
    }
    reviewCounter = parseInt(reviewCounter) + 1;
    localStorage.setItem('reviewCounter', reviewCounter);
  }
  
  // Handle form submission
  document.getElementById('productReviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    incrementReviewCounter();
    // Redirect to review.html page
    window.location.href = 'review.html';
  });