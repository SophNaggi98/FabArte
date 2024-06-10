let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);

(function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 5000);

  // Smooth scroll per la freccia
  document
    .querySelector(".down-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
})();

document.querySelector(".down-arrow").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#next-section").scrollIntoView({
    behavior: "smooth",
  });
});

// Testimonials //

document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  var container = document.querySelector(".testimonial-container");
  var testimonials = document.querySelectorAll(".testimonial");
  var totalTestimonials = testimonials.length;
  var slideWidth = testimonials[0].offsetWidth;

  function updateSlider() {
    var distance = -slideIndex * slideWidth;
    container.style.transform = `translateX(${distance}px)`; // Use transform for smooth transition
  }

  function autoSlide() {
    slideIndex++;
    if (slideIndex >= totalTestimonials) {
      slideIndex = 0; // Reset slide index if reached the end
    }
    updateSlider();
  }

  setInterval(autoSlide, 3000); // Change slide every 3 seconds
});

// Add click event listener to the eye icon Occhio
document
  .querySelector(".grid-item.interactive .overlay img")
  .addEventListener("click", function () {
    // larger image Opens
    window.open("larger_image.html", "_blank");
  });

// Add click event listener to the eye icon
document
  .querySelector(".grid-item.interactive .overlay .magnifying-glass")
  .addEventListener("click", function () {
    // Get the image element
    var image = document.querySelector(".grid-item.interactive img");

    image.src = "immages/Rectangle 82.png";
  });

// Add click event listener to the eye icon
document
  .querySelector(".grid-item.interactive .overlay .magnifying-glass")
  .addEventListener("click", function () {
    var imageSrc = "immages/Rectangle 82.png";

    // Open a new page with the larger image
    window.open(
      "larger_image.html?src=" + encodeURIComponent(imageSrc),
      "_blank"
    );
  });

// button
let mybutton = document.getElementById("Top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function submitForm() {
  // Get selected values from each form
  var material = document.querySelector('input[name="material"]:checked').value;
  var shape = document.querySelector('input[name="shape"]:checked').value;
  var stone = document.querySelector('input[name="stone"]:checked').value;

  // Construct URL with selected options
  var checkoutURL =
    "checkout.html?material=" +
    material +
    "&shape=" +
    shape +
    "&stone=" +
    stone;

  // Redirect to the checkout page
  window.location.href = checkoutURL;
}

// Select all input fields
const materialInput = document.getElementById("material");
const shapeInput = document.getElementById("shape");
const stoneInput = document.getElementById("stone");

// Select the display elements
const materialDisplay = document.getElementById("material-display");
const shapeDisplay = document.getElementById("shape-display");
const stoneDisplay = document.getElementById("stone-display");

// Add event listeners to inputs
materialInput.addEventListener("change", updateSelectedMaterial);
shapeInput.addEventListener("change", updateSelectedShape);
stoneInput.addEventListener("change", updateSelectedStone);

//  material
function updateSelectedMaterial() {
  materialDisplay.textContent = materialInput.value;
}

//  shape
function updateSelectedShape() {
  shapeDisplay.textContent = shapeInput.value;
}

//  stone
function updateSelectedStone() {
  stoneDisplay.textContent = stoneInput.value;
}
