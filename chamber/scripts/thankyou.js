document.addEventListener('DOMContentLoaded', function () {
    // Set timestamp
    const now = new Date();

    // Custom format: YYYY-MM-DD HH:mm:ss
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Set the hidden input field
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = formattedTimestamp;
        console.log('Timestamp set:', formattedTimestamp);
    } else {
        console.error('Timestamp input field not found!');
    }

    // Process URL parameters
    const currentUrl = window.location.href;
    const everything = currentUrl.split("?");
    if (everything.length < 2) {
        console.error("No URL parameters found!");
        return;
    }

    const formData = everything[1].split("&");

    // Function to extract and decode a parameter
    function show(param) {
        let result = "";
        formData.forEach((element) => {
            if (element.startsWith(param)) {
                result = decodeURIComponent(element.split("=")[1] || "").replace(/\+/g, " ");
            }
        });
        return result;
    }

    // Render data in #results
    const showInfo = document.querySelector("#results");
    if (showInfo) {
        showInfo.innerHTML = `
            <p><strong>First Name:</strong> ${show("first_name")}</p>
            <p><strong>Last Name:</strong> ${show("last_name")}</p>
            <p><strong>Organizational Title:</strong> ${show("organizational_title")}</p>
            <p><strong>Mobile:</strong> ${show("mobile")}</p>
            <p><strong>Email:</strong> <a href="mailto:${show("email")}">${show("email")}</a></p>
            <p><strong>Business Name:</strong> ${show("business_name")}</p>
            <p><strong>Membership:</strong> ${show("membership")}</p>
            <p><strong>Description:</strong> ${show("description")}</p>
            <p><strong>Timestamp:</strong> ${show("timestamp")}</p>
        `;
    } else {
        console.error("#results container not found!");
    }
});
