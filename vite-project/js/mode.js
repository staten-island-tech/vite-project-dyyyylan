export function theme(theme1, theme2) {
    theme1.addEventListener("click", function () {
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
    });

    theme2.addEventListener("click", function () {
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode");
    });
}