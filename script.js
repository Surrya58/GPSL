document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("disclaimer-modal");
  const agreeBtn = document.getElementById("agree-btn");

  // Check if the user has already agreed to the disclaimer
  if (localStorage.getItem("agreedToDisclaimer") === "true") {
    modal.style.display = "none"; // Hide modal if already agreed
  } else {
    modal.style.display = "block"; // Show modal if not agreed yet
  }

  // Event listener for the 'I AGREE' button
  agreeBtn.addEventListener("click", function () {
    localStorage.setItem("agreedToDisclaimer", "true"); // Set the flag in localStorage
    modal.style.display = "none"; // Hide the modal
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  // Toggle the navbar display on hamburger click
  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("expanded");
  });

  // Optional: Close the navbar when a link is clicked
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("expanded");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slideshow img");
  let currentIndex = 0; // Start with the first slide as the active one

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.visibility = "hidden"; // Hide all slides
    });

    // Correct the index to wrap around slides array
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].style.visibility = "visible"; // Show the current slide
  }

  // Initialize the first slide
  showSlide(currentIndex);

  // Navigate to the next slide
  document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  // Navigate to the previous slide
  document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });
});
