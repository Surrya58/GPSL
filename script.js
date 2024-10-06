document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("disclaimer-modal");
    const agreeBtn = document.getElementById("agree-btn");

    agreeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
});
