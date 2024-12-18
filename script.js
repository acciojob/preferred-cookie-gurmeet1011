// Select DOM elements
const form = document.getElementById("preferences-form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// Helper function to set a cookie
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Helper function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply preferences from cookies on page load
function applyPreferences() {
  const savedFontSize = getCookie("fontsize") || "16";
  const savedFontColor = getCookie("fontcolor") || "#000000";

  // Update CSS variables
  document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", savedFontColor);

  // Update form inputs
  fontSizeInput.value = savedFontSize;
  fontColorInput.value = savedFontColor;
}

// Save preferences when the form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  // Save preferences in cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply preferences
  applyPreferences();

  alert("Preferences saved!");
});

// Apply preferences on page load
applyPreferences();


	