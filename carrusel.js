const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.testimonials__carousel-items-holder2');
const slides = document.querySelectorAll('.slide');
let arrayOfSlides = Array.prototype.slice.call(slides);
let carouselDisplaying;
let screenSize;
setScreenSize();
var lengthOfSlide;

const testimonialsList = [];

testimonialsList.push({
    testimonialPhoto: './public/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 1',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 2',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 3',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada. malesuada malesuada malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 4',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 5',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 6',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});





buildTestimonials(testimonialsList);

function addClone() {
   let lastSlide = carouselContent.lastElementChild.cloneNode(true);
   lastSlide.style.left = (-lengthOfSlide) + "px";
   carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  const slides = document.querySelectorAll('.slide');
  let slidesArray = Array.prototype.slice.call(slides);
  let width = 0;

  slidesArray.forEach(function(el, i){
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  const slides = document.querySelectorAll('.slide');
  let slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  let maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function(el, i){
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener('resize', setScreenSize);

function setScreenSize() {
  if ( window.innerWidth >= 500 ) {
    carouselDisplaying = 3;
  } else if ( window.innerWidth >= 300 ) {
    carouselDisplaying = 2;
  } else {
    carouselDisplaying = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  const slides = document.querySelectorAll('.slide');
  let slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
  let initialWidth = -lengthOfSlide;
  slidesArray.forEach(function(el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}


const rightNav = document.querySelector('.nav-right');
rightNav.addEventListener('click', moveLeft);

let moving = true;
function moveRight() {
  if ( moving ) {
    moving = false;
    let lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    let firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  let firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener('transitionend', activateAgain);
}

const leftNav = document.querySelector('.nav-left');
leftNav.addEventListener('click', moveRight);


function moveLeft() {
  if ( moving ) {
    moving = false;
    removeClone();
    let firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  let firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener('transitionend', replaceToEnd);
}




carouselContent.addEventListener('mousedown', seeMovement);

let initialX;
let initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener('mousemove', slightMove);
  document.addEventListener('mouseup', moveBasedOnMouse);
}

function slightMove(e) {
  if ( moving ) {
    let movingX = e.clientX;
    let difference = initialX - movingX;
    if ( Math.abs(difference) < (lengthOfSlide/4) ) {
      slightMoveSlides(difference);
    }  
  }
}

function getInitialPos() {
  const slides = document.querySelectorAll('.slide');
  let slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function(el){
    let left = Math.floor( parseInt( el.style.left.slice(0, -2 ) ) ); 
    initialPos.push( left );
  });
}

function slightMoveSlides(newX) {
  const slides = document.querySelectorAll('.slide');
  let slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function(el, i){
    let oldLeft = initialPos[i];
    el.style.left = (oldLeft + newX) + "px";
  });
}

function moveBasedOnMouse(e) { 
  let finalX = e.clientX;
  if ( initialX - finalX > 0) {
    moveRight();
  } else if ( initialX - finalX < 0 ) {
    moveLeft();
  }
  document.removeEventListener('mouseup', moveBasedOnMouse);
  carouselContent.removeEventListener('mousemove', slightMove);
}








//  ______________________________________________________________________________________ Builds the testimonial cards


function buildTestimonials(testimonials) {
    
    testimonials.forEach(testimonial => {
        // Create testimonial item container
        const testimonialItem = document.createElement('li');
        testimonialItem.classList.add('testimonials__carousel-item');
    
        // Create testimonial image
        const testimonialImage = document.createElement('img');
        testimonialImage.classList.add('testimonials__carousel-item-image');
        testimonialImage.alt = '';
        testimonialImage.src = testimonial.testimonialPhoto;
        testimonialItem.appendChild(testimonialImage);
    
        // Create testimonial text block
        const textBlock = document.createElement('div');
        textBlock.classList.add('testimonials__carousel-item-text-block');
    
        // Create testimonial name
        const name = document.createElement('h5');
        name.classList.add('testimonials__carousel-item-name', 'h5-global-font');
        name.textContent = testimonial.testimonialName;
        textBlock.appendChild(name);
    
        // Create testimonial job
        const job = document.createElement('h6');
        job.classList.add('testimonials__carousel-item-position', 'h6-global-font');
        job.textContent = testimonial.testimonialJob;
        textBlock.appendChild(job);
    
        // Create testimonial testimonial
        const testimonialText = document.createElement('p');
        testimonialText.classList.add('testimonials__carousel-item-testimonial', 'body-global-font');
        testimonialText.textContent = testimonial.testomonialText;
        textBlock.appendChild(testimonialText);
    
        testimonialItem.appendChild(textBlock);
    
        carouselContent.appendChild(testimonialItem);
    });
}

