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
  