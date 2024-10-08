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
  const slides = document.querySelectorAll(".slide");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.style.display = "none";
      dots[idx].classList.remove("active");
    });
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.onclick = function () {
    nextSlide();
  };

  prevButton.onclick = function () {
    prevSlide();
  };

  dots.forEach((dot, i) => {
    dot.onclick = function () {
      currentSlide = i;
      showSlide(currentSlide);
    };
  });

  // Initialize the first slide
  showSlide(currentSlide);
});

// Play/Pause functionality
let playing = true;
let pauseButton = document.createElement("button");
pauseButton.textContent = playing ? "Pause" : "Play";
pauseButton.className = "pause";
document.querySelector(".slideshow-container").appendChild(pauseButton);

pauseButton.addEventListener("click", function () {
  if (playing) {
    clearInterval(slideInterval);
    pauseButton.textContent = "Play";
  } else {
    slideInterval = setInterval(nextSlide, 3000);
    pauseButton.textContent = "Pause";
  }
  playing = !playing;
});

function resetInterval() {
  clearInterval(slideInterval);
  if (playing) {
    slideInterval = setInterval(nextSlide, 3000);
  }
}

showSlide(currentSlide); // Initialize the slideshow
