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

let slidesIndex = 0;
showSlides();

// show slide
function showSlides() {
  let slides = document.getElementsByClassName("myslide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden")
  }

  if (slidesIndex> slides.length-1) {
    slidesIndex = 0
  } 
  
  slides[slidesIndex].classList.toggle("hidden");
  slidesIndex++;
}

setInterval(() => showSlides(), 2000)

