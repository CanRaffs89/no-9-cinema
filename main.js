function classToggle() {
    const navbar = document.querySelectorAll('.nav-items')
    navbar.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}

document.querySelector('.nav-toggle')
    .addEventListener('click', classToggle);