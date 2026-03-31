const getStoredTheme = localStorage.getItem('theme')
const select = document.getElementById("themeSelect")

function changeTheme() {
    const selectedTheme = select.value || getStoredTheme
    document.documentElement.setAttribute("data-bs-theme", selectedTheme);
    localStorage.setItem('theme', selectedTheme)
}

    document.documentElement.setAttribute("data-bs-theme", getStoredTheme);