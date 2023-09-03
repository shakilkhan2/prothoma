let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName("li");

let elementsToShow = 7; // Number of elements to show at once
let cardWidth = sliderContainer.clientWidth / elementsToShow;
let maxMargin = 0;
let minMargin = -cardWidth * (cards.length - elementsToShow);

// Set the initial width of the slider
slider.style.width = cards.length * cardWidth + "px";
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';

// Set the initial margin-left to 0
slider.style.marginLeft = "0px";

function prev() {
  let currentMargin = parseFloat(slider.style.marginLeft) || 0;
  
  // Limit scrolling to the rightmost element
  if (currentMargin < maxMargin) {
    currentMargin += cardWidth;
    
    // Make sure we don't exceed the maxMargin
    if (currentMargin > maxMargin) {
      currentMargin = maxMargin;
    }
    
    slider.style.marginLeft = currentMargin + "px";
  }
}

function next() {
  let currentMargin = parseFloat(slider.style.marginLeft) || 0;

  // Limit scrolling to the leftmost element
  if (currentMargin > minMargin) {
    currentMargin -= cardWidth;

    // Make sure we don't exceed the minMargin
    if (currentMargin < minMargin) {
      currentMargin = minMargin;
    }

    slider.style.marginLeft = currentMargin + "px";
  }
}
