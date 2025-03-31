// Selecting elements
const container = document.querySelector("#container");
const text = document.querySelector("#text");

// Selecting theme buttons
const themeDark = document.querySelector("#themeDark");
const themeRed = document.querySelector("#themeRed");
const themeGreen = document.querySelector("#themeGreen");
const themeReset = document.querySelector("#themeReset");

// Function to apply a theme
function applyTheme(bgColor, textColor, fontFamily) {
    container.style.backgroundColor = bgColor;
    text.style.color = textColor;
    text.style.fontFamily = fontFamily;
}

// Event listeners for each theme button
themeDark.addEventListener("click", () => {
    applyTheme("#333", "#fff", "Arial, sans-serif");
});

themeRed.addEventListener("click", () => {
    applyTheme("#8B0000", "#fff", "Georgia, serif");
});

themeGreen.addEventListener("click", () => {
    applyTheme("#006400", "#fff", "'Courier New', monospace");
});

// Reset button event listener
themeReset.addEventListener("click", () => {
    applyTheme("white", "black", "Arial, sans-serif"); // Default styles
});
