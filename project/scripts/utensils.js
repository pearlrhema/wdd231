const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templesElement = document.getElementById("Delicacies");
const foodDialog = document.getElementById("foodDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogDescription = document.getElementById("dialogDescription");
const closeDialogButton = document.getElementById("closeDialog");

let UtensilsList = [];

// Hamburger Menu Toggle
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/* Display Food List with Dialog Event */
const displayFoodList = (foods) => {
    templesElement.innerHTML = ""; // Clear previous content
    for (const food of foods) {
        const myArticle = document.createElement("article");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const img = document.createElement("img");

        h3.textContent = food.productName;
        h4.textContent = food.Description;
        img.src = food.imageSource;
        img.setAttribute('alt', `${food.productName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 400);
        img.setAttribute("height", 250);

        myArticle.appendChild(h3);
        myArticle.appendChild(img);
        myArticle.appendChild(h4);

        // Add click event to open the dialog with food details
        myArticle.addEventListener('click', () => {
            dialogTitle.textContent = food.productName;
            dialogDescription.textContent = food.Description;
            foodDialog.showModal();
        });

        templesElement.appendChild(myArticle);
    }
};

// Fetch Food List JSON
const getFoodListFromJsonFile = async () => {
    const myresponse = await fetch("https://pearlrhema.github.io/wdd131/utensils.json");
    let foodData = await myresponse.json();
    UtensilsList = foodData;
    displayFoodList(UtensilsList);
};

// Reset the food display
const reset = () => {
    templesElement.textContent = "";
};

// Sort Categories
const sortCategories = (Delicacies) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "cylinder":
            displayFoodList(Delicacies.filter(food => food.category.includes("cylinder")));
            break;
        case "burner":
            displayFoodList(Delicacies.filter(food => food.category.includes("burner")));
            break;
        case "stove":
            displayFoodList(Delicacies.filter(food => food.category.includes("stove")));
            break;
        default:
            reset();
            break;
    }
};

// Close Dialog Event
closeDialogButton.addEventListener('click', () => {
    foodDialog.close();
});

// Event Listener for Category Filter
document.getElementById("sortBy").addEventListener('change', () => {
    sortCategories(UtensilsList);
});

// Initialize Fetch
getFoodListFromJsonFile();
reset();
