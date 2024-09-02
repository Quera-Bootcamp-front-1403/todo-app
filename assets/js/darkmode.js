const btnDark = document.getElementById("dark-mode");

btnDark-addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("dark");
})