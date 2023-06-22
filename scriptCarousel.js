const testimonialsList = [];

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 1',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 2',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 3',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada. malesuada malesuada malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 4',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 5',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 6',
    testimonialJob: 'Project Manager at Google',
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.”'
});


//  ______________________________________________________________________________________ Builds the testimonial cards

const carouselItemsHolder = document.querySelector('.testimonials__carousel-items-holder');

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
    
        carouselItemsHolder.appendChild(testimonialItem);
    });
}

buildTestimonials(testimonialsList);

const carouselLeftButton = document.getElementById('carousel-left-button');
const carouselRightButton = document.getElementById('carousel-right-button');
// const carouselItemsHolder = document.querySelector('.testimonials__carousel-items-holder');

// Controlador de evento para el botón de desplazamiento izquierdo
carouselLeftButton.addEventListener('click', () => {
  carouselItemsHolder.scrollBy({
    left: -carouselItemsHolder.offsetWidth,
    behavior: 'smooth'
  });
});

// Controlador de evento para el botón de desplazamiento derecho
carouselRightButton.addEventListener('click', () => {
  carouselItemsHolder.scrollBy({
    left: carouselItemsHolder.offsetWidth,
    behavior: 'smooth'
  });
});




//  ______________________________________________________________________________________ Carousel Buttons

/*
const carouselItemsWindow = document.querySelector('.testimonials__carousel-items-window');
const carouselItems = Array.from(document.querySelectorAll('.testimonials__carousel-item'));

const leftButton = document.querySelector('.testimonials__carousel-left-button-desktop');
const rightButton = document.querySelector('.testimonials__carousel-right-button-desktop');

const itemWidth = carouselItems[0].offsetWidth + 20;
const scrollAmount = itemWidth * 3;

let scrollPosition = 0;

leftButton.addEventListener('click', () => {
    console.log(scrollAmount + " click izquierdo");
    
    scrollPosition -= scrollAmount;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    carouselItemsWindow.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    console.log(scrollAmount + " click derecho");
    scrollPosition += scrollAmount;
    if (scrollPosition > carouselItemsHolder.offsetWidth - carouselItemsWindow.offsetWidth) {
        scrollPosition = carouselItemsHolder.offsetWidth - carouselItemsWindow.offsetWidth;
    }
    carouselItemsWindow.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

*/