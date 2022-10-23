const header = document.querySelector.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle9("sticky", window.scrollY > 0);

});