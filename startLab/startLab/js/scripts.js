const openDialogButton = document.querySelector("#openDialogButton");
const closeDialogButton = document.querySelector("#closeDialogButton");
const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");


openDialogButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Apple is not my favorite fruit`
})
openDialogButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Orange too is not my favorite fruit`
})
openDialogButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Bannana is my favorite fruit`
})

closeDialogButton.addEventListener("click", () => {
    dialogBox.close();
})