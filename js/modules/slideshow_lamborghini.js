export default function SlideshowLamborghini() {

  // variables
  let currentSlideIndexLamborghini = 0;

  // query selectors
  const previousButton = document.querySelector('.prev-lamborghini');
  const nextButton = document.querySelector('.next-lamborghini');
  const lamborghiniSlides = document.querySelectorAll('.carousel-inner-lamborghini');
  const dotsLamborghini = document.querySelectorAll('.dot-lamborghini');

  // event listeners 
  previousButton.addEventListener('click', handlePreviousButton);
  nextButton.addEventListener('click', handleNextButton);

  // event handlers 
  function handlePreviousButton() {
    decreaseCurrentIndex();
    renderLamborghiniSlide();
  }

  function handleNextButton() {
    increaseCurrentIndex();
    renderLamborghiniSlide();
  }

  // function to decrease current index
  function decreaseCurrentIndex() {

    if (currentSlideIndexLamborghini > 0) {
      currentSlideIndexLamborghini -= 1;
    } else {
      currentSlideIndexLamborghini = lamborghiniSlides.length - 1;
    }
  }

  // function to increase current index
  function increaseCurrentIndex() {

    if (currentSlideIndexLamborghini < lamborghiniSlides.length - 1) {
      currentSlideIndexLamborghini += 1;
    } else {
      currentSlideIndexLamborghini = 0;
    }
  }

  // For First Slide
  if (currentSlideIndexLamborghini == 0) {
    renderLamborghiniSlide();
  }

  // render function
  function renderLamborghiniSlide() {

    for (let index = 0; index < lamborghiniSlides.length; index += 1) {
      lamborghiniSlides[index].style.display = "none";
    }

    for (let index = 0; index < dotsLamborghini.length; index += 1) {
      dotsLamborghini[index].className = dotsLamborghini[index].className.replace(" active", "");
    }

    lamborghiniSlides[currentSlideIndexLamborghini].style.display = "block";
    dotsLamborghini[currentSlideIndexLamborghini].className += " active";
  }
}