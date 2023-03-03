export default function SlideshowFerrari() {

  // variables
  let currentSlideIndexFerrari = 0;

  // query selectors
  const previousButton = document.querySelector('.prev-ferrari');
  const nextButton = document.querySelector('.next-ferrari');
  const ferrariSlides = document.querySelectorAll('.carousel-inner-ferrari');
  const dotsFerrari = document.querySelectorAll('.dot-ferrari');

  // event listeners 
  previousButton.addEventListener('click', handlePreviousButton);
  nextButton.addEventListener('click', handleNextButton);

  // event handlers 
  function handlePreviousButton() {
    decreaseCurrentIndex();
    renderFerrariSlide();
  }

  function handleNextButton() {
    increaseCurrentIndex();
    renderFerrariSlide();
  }

  // function to decrease current index
  function decreaseCurrentIndex() {

    if (currentSlideIndexFerrari > 0) {
      currentSlideIndexFerrari -= 1;
    } else {
      currentSlideIndexFerrari = ferrariSlides.length - 1;
    }
  }

  // function to increase current index
  function increaseCurrentIndex() {

    if (currentSlideIndexFerrari < ferrariSlides.length - 1) {
      currentSlideIndexFerrari += 1;
    } else {
      currentSlideIndexFerrari = 0;
    }
  }
  // Dots Indicators
  for (let i = 0; i < dotsFerrari.length; i++) {
    dotsFerrari[i].addEventListener('click', function () {
     currentSlideIndexFerrari = i;
     renderFerrariSlide();
    });
  }

  // For First Slide
  if (currentSlideIndexFerrari == 0) {
    renderFerrariSlide();
  }

  // render function
  function renderFerrariSlide() {

    for (let index = 0; index < ferrariSlides.length; index += 1) {
      ferrariSlides[index].style.display = "none";
    }

    for (let index = 0; index < dotsFerrari.length; index += 1) {
      dotsFerrari[index].className = dotsFerrari[index].className.replace(" active", "");
    }

    ferrariSlides[currentSlideIndexFerrari].style.display = "block";
    dotsFerrari[currentSlideIndexFerrari].className += " active";
  }
}