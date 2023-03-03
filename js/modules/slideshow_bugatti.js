export default function SlideshowBugatti() {

  // variabler
  let currentSlideIndexBugatti = 0;

  // query selectors
  const previousButton = document.querySelector('.prev-bugatti');
  const nextButton = document.querySelector('.next-bugatti');
  const bugattiSlides = document.querySelectorAll('.carousel-inner-bugatti');
  const dotsBugatti = document.querySelectorAll('.dot-bugatti');

  // event listeners 
  previousButton.addEventListener('click', handlePreviousButton);
  nextButton.addEventListener('click', handleNextButton);

  // event handlers 
  function handlePreviousButton() {
    decreaseCurrentIndex();
    renderBugattiSlide();
  }

  function handleNextButton() {
    increaseCurrentIndex();
    renderBugattiSlide();
  }

  // function to decrease current index
  function decreaseCurrentIndex() {

    if (currentSlideIndexBugatti > 0) {
      currentSlideIndexBugatti -= 1;
    } else {
      currentSlideIndexBugatti = bugattiSlides.length - 1;
    }
  }

  // function to increase current index
  function increaseCurrentIndex() {

    if (currentSlideIndexBugatti < bugattiSlides.length - 1) {
      currentSlideIndexBugatti += 1;
    } else {
      currentSlideIndexBugatti = 0;
    }
  }

  // For First Slide
  if (currentSlideIndexBugatti == 0) {
    renderBugattiSlide();
  }

  // render function
  function renderBugattiSlide() {

    for (let index = 0; index < bugattiSlides.length; index += 1) {
      bugattiSlides[index].style.display = "none";
    }

    for (let index = 0; index < dotsBugatti.length; index += 1) {
      dotsBugatti[index].className = dotsBugatti[index].className.replace(" active", "");
    }

    bugattiSlides[currentSlideIndexBugatti].style.display = "block";
    dotsBugatti[currentSlideIndexBugatti].className += " active";
  }
}