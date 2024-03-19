const remove = document.querySelector(".delete-button");
let showAlert = document.querySelector(".alert-hide")
// buttons of Alert window
let deletePermanent = document.querySelector(".confirm-deletation")
let cancelProgress = document.querySelector(".cancel-button")
//DeletedMessage components
let deletedMessage = document.querySelector(".deletedMessage-hider")
let backButton = document.querySelector(".ok-button");
let crossSign = document.querySelector(".fa")


remove.addEventListener("click", () => {
    showAlert.style.display = "block";
    remove.style.display = "none";
})

deletePermanent.addEventListener("click", () => {
    deletedMessage.style.display = "block";
    showAlert.style.display = "none";
})

cancelProgress.addEventListener("click", () => {
    showAlert.style.display = "none"
    remove.style.display = "block";

})

backButton.addEventListener("click", () => {
    deletedMessage.style.display = "none";
    showAlert.style.display = "none";
    remove.style.display = "block";
    remove.innerHTML = "Delete account again";
})

crossSign.addEventListener("click", () => {
    deletedMessage.style.display = "none";
    remove.style.display = "block";
    remove.innerHTML = "Delete account again";
})
