// Get the popup elements
var aboutPopup = document.getElementById("about-popup");
var howItWorksPopup = document.getElementById("how-it-works-popup");
var contactPopup = document.getElementById("contact-popup");

// Function to open the popup
function openPopup(popup) {
    popup.style.display = "block";
}

// Function to close the popup
function closePopup(popup) {
    popup.style.display = "none";
}

// Event listeners for header links
document.querySelector("a[href='#about-popup']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    openPopup(aboutPopup);
});

document.querySelector("a[href='#how-it-works-popup']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    openPopup(howItWorksPopup);
});

document.querySelector("a[href='#contact-popup']").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    openPopup(contactPopup);
});

// Event listeners for close buttons
document.querySelectorAll(".close").forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
        var popup = this.closest(".popup");
        closePopup(popup);
    });
});
// Function to open the popup with smooth animation
function openPopup(popup) {
    popup.style.display = "block";
    setTimeout(function() {
        popup.querySelector(".popup-content").classList.add("active");
    }, 50); // Delay added for smoother animation
}

// Function to close the popup with smooth animation
function closePopup(popup) {
    popup.querySelector(".popup-content").classList.remove("active");
    setTimeout(function() {
        popup.style.display = "none";
    }, 300); // Delay added for smoother animation
}

