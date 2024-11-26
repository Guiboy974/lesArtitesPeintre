// menu burger
document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('burgerButton');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerIcon = document.getElementById('burgerIcon');
  const closeIcon = document.getElementById('closeIcon');

  burgerButton.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('hidden');

    if (isOpen) {
      mobileMenu.classList.remove('hidden'); // Affiche le menu
      burgerIcon.classList.add('hidden'); // Cache l'icône burger
      closeIcon.classList.remove('hidden'); // Affiche l'icône de fermeture
    } else {
      mobileMenu.classList.add('hidden'); // Cache le menu
      burgerIcon.classList.remove('hidden'); // Affiche l'icône burger
      closeIcon.classList.add('hidden'); // Cache l'icône de fermeture
    }
  });
});

// Accordion
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", toggleAccordion)
}

function toggleAccordion(event) {
  const panelClose = document.getElementsByClassName("panel");
  const panel = event.target.nextElementSibling;
  if(event.target.classList.contains("active")){
    event.target.classList.remove("active")
    panel.classList.add("hidden")
  } else {
    for (let i = 0; i < panelClose.length; i++) {
      panelClose[i].classList.add("hidden")
      panelClose[i].previousElementSibling.classList.remove("active")
    }
    event.target.classList.toggle("active")
    panel.classList.toggle("hidden")
  }
}

//slider
import { Caroussel } from "./classes.js";

const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];
let slides = document.getElementsByClassName("myslide");


let slidesIndex = 0;

const caroussel = new Caroussel(slidesIndex, slides)

// next/previous slide
next.addEventListener("click", () => caroussel.next());
prev.addEventListener("click", () => caroussel.prev());

// show auto slide
setInterval(() => caroussel.showSlidesAuto(), 4000)

