const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
} else {
    themeToggle.textContent = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    for (let el of textElements) {
        el.classList.toggle("dark-mode", isDark);
    }
});
