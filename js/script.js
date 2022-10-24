const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle9("sticky", window.scrollY > 0);

});

let menu = document.querySelector('#navbarIcon');
let navList = document.querySelector('.navbarHeader');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}

const sr = Scrollreveal({
    distance: '50px',
    duration: 2500,
    reset: true
});

sr.reveal('.homeText', { delay: 350, origin: 'left' })
