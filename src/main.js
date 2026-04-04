import './style.css'

// CARRUSEL
let index = 0;

const slides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

// siguiente
btnNext.addEventListener("click", function() {
  slides[index].classList.remove("active");
  index = index + 1;

  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
});

// anterior
btnPrev.addEventListener("click", function() {
  slides[index].classList.remove("active");
  index = index - 1;

  if (index < 0) {
    index = slides.length - 1;
  }

  slides[index].classList.add("active");
});