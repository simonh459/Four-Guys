// Function that allows for the previously used theme (if the website is used before) to be retrieved from localstorage
window.onload = function () {
    // Temporarily disable transitions
    document.body.classList.add("no-transition");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Re-enable transitions after a tiny delay
    setTimeout(() => {
        document.body.classList.remove("no-transition");
    }, 50);
};

// Function to facilitate manually toggling dark mode on/off
function darkmodeFunc() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
}

const body = document.body;
const textSizeButton = document.getElementById('toggle-text-size');
const dots = document.querySelectorAll(".dot");

// Function to toggle a class on the body and update the button state
function toggleOption(button, className) {
    body.classList.toggle(className);
    const isActive = body.classList.contains(className);
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive);
}

// Toggle Large Text Size
if (textSizeButton) {
    textSizeButton.addEventListener('click', () => {
        toggleOption(textSizeButton, 'large-text');
    });
}