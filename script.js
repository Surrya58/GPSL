document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("disclaimer-modal");
    const agreeBtn = document.getElementById("agree-btn");

    agreeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.navbar');

    hamburger.addEventListener('click', function () {
        // Toggle class 'open' on navbar
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});

