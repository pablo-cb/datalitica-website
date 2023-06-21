// Array of testimonial objects
const testimonials = [
    {
        image: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
        name: 'John Doe 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        image: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
        name: 'Jane Smith 2',
        text: 'Praesent tincidunt viverra urna, vel tristique orci rutrum sit amet.'
    },
    {
        image: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
        name: 'Jane Smith 3',
        text: 'Praesent tincidunt viverra urna, vel tristique orci rutrum sit amet.'
    },
    {
        image: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
        name: 'Jane Smith 4',
        text: 'Praesent tincidunt viverra urna, vel tristique orci rutrum sit amet.'
    },
    {
        image: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
        name: 'Jane Smith 5',
        text: 'Praesent tincidunt viverra urna, vel tristique orci rutrum sit amet.'
    },
    {
        image: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
        name: 'Jane Smith 6',
        text: 'Praesent tincidunt viverra urna, vel tristique orci rutrum sit amet.'
    },
    // Add more testimonial objects as needed
];

const carouselTrack = document.querySelector('.carousel-track');
const carouselDots = document.querySelector('.carousel-dots');
const carouselNavPrev = document.querySelector('.carousel-nav-prev');
const carouselNavNext = document.querySelector('.carousel-nav-next');

let currentIndex = 0;

function buildTestimonials() {
    // Clear the existing content of the carousel track and dots
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        // Create a new carousel item element
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
        <p>${testimonial.text}</p>
        `;
        carouselTrack.appendChild(item);

        // Create a new carousel dot element
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
        setCurrentSlide(index);
        });
        carouselDots.appendChild(dot);
    });

    // Add click event listeners to the navigation buttons
    carouselNavPrev.addEventListener('click', () => {
        moveSlide('prev');
    });

    carouselNavNext.addEventListener('click', () => {
        moveSlide('next');
    });

    // Set the initial slide
    setCurrentSlide(currentIndex);
}
  


function setCurrentSlide(index) {
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));

    // Set tabindex="-1" for all items
    items.forEach(item => {
        item.setAttribute('tabindex', '-1');
    });

    // Remove the "active" class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Set tabindex="0" for the current item and focus on it
    items[index].setAttribute('tabindex', '0');
    items[index].focus();

    // Add the "active" class to the current dot
    dots[index].classList.add('active');
}


function setCurrentSlide(index) {
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));

    // Set tabindex="-1" for all items
    items.forEach(item => {
        item.setAttribute('tabindex', '-1');
    });

    // Remove the "active" class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Set tabindex="0" for the current item and focus on it
    items[index].setAttribute('tabindex', '0');
    items[index].focus();

    // Add the "active" class to the current dot
    dots[index].classList.add('active');
}

  
function moveSlide(direction) {
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const slideWidth = items[0].offsetWidth;
    const track = document.querySelector('.carousel-track');

    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    } else {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    }

    // Move the track using CSS transform
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    // Set the current slide
    setCurrentSlide(currentIndex);
}


buildTestimonials();  