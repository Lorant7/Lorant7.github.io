window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) { // Change 100 to whatever scroll distance you want
        navbar.classList.add('faded');
    } else {
        navbar.classList.remove('faded');
    }
};
