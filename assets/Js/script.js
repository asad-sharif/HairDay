function closePopup() {
    document.getElementById("confirmationPopup").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear form fields
    document.getElementById("contactForm").reset();

    // Show confirmation popup
    document.getElementById("confirmationPopup").style.display = "flex";
});
