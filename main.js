// Mobile menu dropdown toggle
function classToggle() {
    const navbar = document.querySelectorAll('.nav-items')
    navbar.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}

document.querySelector('.nav-toggle')
    .addEventListener('click', classToggle);

// Image carousel
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex -1].style.display = "block";
}