const url = 'https://pearlrhema.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#card');
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.name);
}

getBusinessData();