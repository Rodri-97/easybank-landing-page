const header = document.getElementById("header");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const icons = [hamburgerIcon, closeIcon];
const nav = document.getElementById("nav");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        header.classList.toggle("adjust-in-mobile");
        hamburgerIcon.classList.toggle("hide");
        closeIcon.classList.toggle("show");
        nav.classList.toggle("show-in-mobile");
    });
});