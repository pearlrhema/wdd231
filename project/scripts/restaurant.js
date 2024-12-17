/* Declare and initialize global variables */
const templesElement = document.getElementById("Delicacies");
let foodList = [];

/* Function to display dialog with food details */
const displayDialog = (food) => {
    // Check if dialog already exists and remove it
    const existingDialog = document.getElementById("foodDialog");
    if (existingDialog) {
        existingDialog.remove();
    }

    // Create dialog element
    const dialog = document.createElement("dialog");
    dialog.id = "foodDialog";

    // Create and append content to the dialog
    const title = document.createElement("h3");
    title.textContent = food.foodName;

    const description = document.createElement("p");
    description.textContent = food.description;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    // Append elements to dialog
    dialog.appendChild(title);
    dialog.appendChild(description);
    dialog.appendChild(closeButton);

    // Append dialog to body and show it
    document.body.appendChild(dialog);
    dialog.showModal();
};

/* Function to display the food list */
const displayFoodList = (foods) => {
    for (const food of foods) {
        const myArticle = document.createElement("article");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        
        h3.textContent = food.foodName;
        h4.textContent = food.description;

        const img = document.createElement("img");
        img.src = food.imageUrl;
        img.alt = `${food.foodName}`;
        img.loading = "lazy";
        img.width = 400;
        img.height = 250;

        // Add click event to display dialog with food details
        myArticle.addEventListener("click", () => displayDialog(food));

        myArticle.appendChild(h3);
        myArticle.appendChild(img);
        myArticle.appendChild(h4);

        templesElement.appendChild(myArticle);
    }
};

/* Fetch food list from JSON file */
const getFoodListFromJsonFile = async () => {
    const myresponse = await fetch("https://pearlrhema.github.io/cse121b/fooditems.json");
    let foodData = await myresponse.json();
    foodList = foodData;
    displayFoodList(foodList);
};

/* Reset Function */
const reset = () => {
    templesElement.textContent = "";
};

/* Sort Categories Function */
const sortCategories = (Delicacies) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "breakfast":
            displayFoodList(Delicacies.filter(food => food.category.includes("Breakfast")));
            break;
        case "launch":
            displayFoodList(Delicacies.filter(food => food.category.includes("Lunch")));
            break;
        case "dinner":
            displayFoodList(Delicacies.filter(food => food.category.includes("Dinner")));
            break;
        default:
            displayFoodList(foodList);
            break;
    }
};

/* Initialize */
getFoodListFromJsonFile();

/* Event Listener */
document.getElementById("sortBy").addEventListener('change', () => { sortCategories(foodList) });
