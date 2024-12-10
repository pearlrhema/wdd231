import {temples} from "../data/temples.js";
console.log(temples);
import {url} from "../data/temples.js";
console.log(url);

const showhere = document.querySelector("#showHere")
const mydialog = document.querySelector("#mydialog");
const mydialogh2 = document.querySelector("#mydialog h2");
const mydialogCloseButton = document.querySelector("#mydialog button");
const mydialogInfo = document.querySelector("#mydialog p");

mydialogCloseButton.addEventListener("click", () => {
    mydialog.close();
})

function displayTempleData(data) {
    console.log(data);
    data.forEach(temple => {
        console.log(temple);
        const photo = document.createElement("img");
        photo.src = `${url}${temple.path}`;
        photo.alt = temple.name;
        photo.addEventListener("click", () => showStuff(temple));
        showhere.appendChild(photo);
    });
}

displayTempleData(temples);

function showStuff(temple) {
    mydialogh2.innerHTML = temple.name;
    mydialogInfo.textContent = `Dedicated ${temple.dedicated} by ${temple.person} as Temple number ${temple.number}`;
    mydialog.showModal();
}