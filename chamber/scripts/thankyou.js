const currentUrl = window.location.href;
console.log(currentUrl);

//divide the url into two halves
const everything = currentUrl.split("?");
console.log(everything);

//grab just the second half
let formData = everything[1].split("&");
console.log(formData);

function show(cup) {
    // console.log(cup);
    formData.forEach(element => {
        // element=element.split("=")
        // console.log(element);
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%2B", "")
            // result = result.replace("%2B", "")
            result = result.replace("%40", "@")
        }
    });
    return (result)
}//

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `<p><strong> First Name:</strong> ${show("first_name")}</P>
<p><strong> Last Name: </strong>${show("last_name")}</P>
<p><strong>Organizational Title: </strong>${show("organizational_title")}</P>
<p><strong> Mobile: </strong>${show("mobile")}</P>
<p><strong> Email: </strong><a href="${show("email")}">${show("email")}</a> </p>
<p><strong>Business Name: </strong>${show("business_name")}</P>
<p><strong> Membership: </strong>${show("membership")}</P>
<p><strong> Description: </strong>${show("description")}</P>
<p><strong> Timestamp: </strong>${show("timestamp")}</P>
`;

// document.getElementById('timestamp').text = new Date().getFullYear();
// document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// const openDialogLink1 = document.querySelector("#openDialogLink1");
// const dialogBox = document.querySelector("#dialogBox");
// const closeDialogButton = document.querySelector("#closeDialogButton");

// openDialogLink1.addEventListener("click", (event) => {
//     // event.preventDefault();
//     dialogBox.showModal(); // Show the dialog box
// });

// closeDialogButton.addEventListener("click", () => {
//     dialogBox.close(); // Close the dialog box
// });
