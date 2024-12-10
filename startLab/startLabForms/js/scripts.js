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
showInfo.innerHTML = `<p> Appointment for ${show("last")}</P>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple
<p>email <a href="${show("email")}">${show("email")}</a> </p>`;
