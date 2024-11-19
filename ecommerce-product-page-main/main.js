const menuIcon = document.querySelectorAll(".menu-icon");
const backdrop = document.querySelectorAll(".backdrop");
const navLinks = document.querySelectorAll(".nav-links");
const closeIcon = document.querySelectorAll(".close-icon");


menuIcon.addEventListner("click", () => {
    navLinks.classList.add("active");
    backdrop.classList.add("active");
})

closeIcon.addEventListner("click", () => {
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
})

backdrop.addEventListner("click", () => {
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
})


