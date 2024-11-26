export class Caroussel {
    constructor(slideIndex, slides) {
        this.slideIndex = slideIndex
        this.slides = slides;
    }

    showSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add("hidden")
          }
          
          if (this.slideIndex > this.slides.length-1) {
            this.slideIndex = 0
          } 
          if (this.slideIndex < 0){
            this.slideIndex = this.slides.length-1
          }
        this.slides[this.slideIndex].classList.toggle("hidden");
    }

    next() {
        this.showSlides(this.slideIndex++)
    }

    prev() {
        this.showSlides(this.slideIndex--)
    }

    showSlidesAuto() {
        this.showSlides(this.slideIndex++)
    }

} 