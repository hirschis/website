const icon = document.querySelector(".icon");
let mobileNav = document.querySelector(".mobilenav");
icon.addEventListener("click", (e) => {
    mobileNav.classList.toggle("show");
});