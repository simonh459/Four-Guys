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

function darkmodeFunc() {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
}