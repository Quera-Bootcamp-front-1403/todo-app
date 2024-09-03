const btnDark = document.getElementById("dark-mode");

btnDark.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.add("dark");
});

const btnLight = document.getElementById("light-mode");

btnLight.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.remove("dark");
});

const sidebar = document.getElementById("sidebar");

const closeSidebarLight = document.getElementById("close-light");

closeSidebarLight.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.toggle("hidden");
})

const closeSidebardark = document.getElementById("close-dark");

closeSidebardark.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.toggle("hidden");
})

const humbergurLight = document.getElementById("humbergermenu-light")

humbergurLight.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.toggle("hidden");
})

const humbergurdark = document.getElementById("humbergermenu-dark")

humbergurdark.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.toggle("hidden");
})