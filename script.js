const footerFacebookButtonImageIcon = document.getElementById(
"footerFacebookButtonImageIcon"
);
if (footerFacebookButtonImageIcon) {
footerFacebookButtonImageIcon.addEventListener("click", function () {
    window.open("https://www.facebook.com/akureyinc/");
});
}

const footerLinkedinButtonImageIcon = document.getElementById(
"footerLinkedinButtonImageIcon"
);
if (footerLinkedinButtonImageIcon) {
footerLinkedinButtonImageIcon.addEventListener("click", function () {
    window.open("https://www.linkedin.com/company/akureyinc/mycompany/");
});
}

const footerInstagramButtonImageIcon = document.getElementById(
"footerInstagramButtonImageIcon"
);
if (footerInstagramButtonImageIcon) {
footerInstagramButtonImageIcon.addEventListener("click", function () {
    window.open("https://www.instagram.com/akureyinc/");
});
}
const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
const observer = new IntersectionObserver(
(entries) => {
    for (const entry of entries) {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
    }
    }
},
{
    threshold: 0.15,
}
);

for (let i = 0; i < scrollAnimElements.length; i++) {
observer.observe(scrollAnimElements[i]);
}



// _____________________________________________________________________________________________  NAVBAR

function toggleMenu() {
    const menuContainer = document.querySelector(".index-mobile");
    const hamburgerButton = document.querySelector(".navbar__hamburger-menu");
    const navbarColor = document.querySelector(".navbar");
    const overlayColor = document.querySelector(".navbar-container");
    const changeLogoColor = document.querySelector(".navbar__button-logo-home");

    menuContainer.classList.toggle("active");
    hamburgerButton.classList.toggle("active");
    navbarColor.classList.toggle("active");
    overlayColor.classList.toggle("active");
    changeLogoColor.classList.toggle("active");
}

const indexMobileItems = document.querySelectorAll(".index-mobile__item");
indexMobileItems.forEach(item => {
    item.addEventListener('click', toggleMenu);
});



// _____________________________________________________________________________________________  SERVICES-Section

const servicesList = [];

servicesList.push({
    serviceName: 'Technology Consulting',
    serviceDescription: 'Our technology consulting services help businesses of all sizes leverage cutting-edge technologies to drive growth and stay competitive. We work closely with you to understand your unique needs and develop tailored solutions that help you achieve your goals.'
});

servicesList.push({
    serviceName: 'Custom Software Development',
    serviceDescription: 'Our custom software development services are designed to help you build, deploy, and maintain software that meets your specific needs. We use agile development methodologies to ensure that we deliver high-quality, scalable solutions on time and within budget.'
});

servicesList.push({
    serviceName: 'Product Discovery',
    serviceDescription: 'Our product discovery services help businesses identify new product opportunities and develop strategies for bringing them to market. We work with you to define your product vision, conduct market research, and develop a roadmap for success.'
});

servicesList.push({
    serviceName: 'Team Extension',
    serviceDescription: 'Our team extension services allow you to scale your team quickly and cost-effectively by tapping into our pool of talented professionals. We provide a range of services, including project management, development, testing, and support, to help you achieve your goals.'
});



function buildServicesHTML(list) {
    const servicesContainer = document.querySelector('.services__expand-cards');
    let activeCard = null;
    list.forEach(service => {
        // Create the main container
        const expandCard = document.createElement('div');
        expandCard.classList.add('services__expand-card');

        // Create the title container
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('services__expand-card-title-container');

        // Create the title element
        const title = document.createElement('h4');
        title.classList.add('services__expand-card-title', 'h4-global-font');
        title.textContent = service.serviceName;

        // Create the expand icon
        const expandIcon = document.createElement('img');
        expandIcon.classList.add('services__expand-card-expand-icon');
        expandIcon.setAttribute('src', './public/services--expandcardplusicon.svg');
        expandIcon.setAttribute('alt', '');

        // Create the minimize icon
        const minimizeIcon = document.createElement('img');
        minimizeIcon.classList.add('services__expand-card-minimize-icon');
        minimizeIcon.setAttribute('src', './public/services--expandcardminimizeicon.svg');
        minimizeIcon.setAttribute('alt', '');
        minimizeIcon.style.display = 'none';

        // Append the title and icons to the title container
        titleContainer.appendChild(title);
        titleContainer.appendChild(expandIcon);
        titleContainer.appendChild(minimizeIcon);

        // Create the expanded text container
        const expandedText = document.createElement('div');
        expandedText.classList.add('services__expand-card-expanded');

        // Create the description text element
        const description = document.createElement('p');
        description.classList.add('services__expand-card-text', 'body-global-font');
        description.textContent = service.serviceDescription;

        // Append the description text to the expanded text container
        expandedText.appendChild(description);

        // Append the title container and expanded text to the main container
        expandCard.appendChild(titleContainer);
        expandCard.appendChild(expandedText);

        // Append the main container to the services container
        servicesContainer.appendChild(expandCard);

        // Add event listener to the title container
        titleContainer.addEventListener('click', () => {
            // Check if the clicked card is already active
            const isCardActive = activeCard === expandCard;

            // Reset the previous active card
            if (activeCard) {
                activeCard.querySelector('.services__expand-card-minimize-icon').style.display = 'none';
                activeCard.querySelector('.services__expand-card-expand-icon').style.display = 'inline-block';
                activeCard.querySelector('.services__expand-card-expanded').style.display = 'none';
            }

            // Toggle the expand/minimize icons and expanded text for the clicked card
            minimizeIcon.style.display = isCardActive ? 'none' : 'inline-block';
            expandIcon.style.display = isCardActive ? 'inline-block' : 'none';
            expandedText.style.display = isCardActive ? 'none' : 'block';

            // Update the activeCard variable based on the toggle
            activeCard = isCardActive ? null : expandCard;

            // Update the icon for the clicked card
            if (!isCardActive) {
                expandIcon.style.display = 'none';
                minimizeIcon.style.display = 'inline-block';
            }
        });
    });
}


// Call the function with the servicesList
// buildServicesHTML(servicesList);


// _____________________________________________________________________________________________  Testimonials

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
    testomonialText: '“Lorem ipsum dolor sit amet consectetur. Proin adipiscingorci neque varius pellentesque eu morbi malesuada.malesuada. malesuada.malesuada.”'
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


function buildTestimonials(testimonials) {
const carouselItemsHolder = document.querySelector('.testimonials__carousel-items-holder');

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



// function buildTestimonials(testimonials) {
//     const carouselItemsHolder = document.querySelector('.testimonials__carousel-items-holder');
//     const leftButton = document.querySelector('.testimonials__carousel-left-button-desktop');
//     const rightButton = document.querySelector('.testimonials__carousel-right-button-desktop');
  
//     testimonials.forEach(testimonial => {
//         // Create testimonial item container
//         const testimonialItem = document.createElement('div');
//         testimonialItem.classList.add('testimonials__carousel-item');

//         // Create testimonial image
//         const testimonialImage = document.createElement('img');
//         testimonialImage.classList.add('testimonials__carousel-item-image');
//         testimonialImage.alt = '';
//         testimonialImage.src = testimonial.testimonialPhoto;
//         testimonialItem.appendChild(testimonialImage);

//         // Create testimonial text block
//         const textBlock = document.createElement('div');
//         textBlock.classList.add('testimonials__carousel-item-text-block');

//         // Create testimonial name
//         const name = document.createElement('h5');
//         name.classList.add('testimonials__carousel-item-name', 'h5-global-font');
//         name.textContent = testimonial.testimonialName;
//         textBlock.appendChild(name);

//         // Create testimonial job
//         const job = document.createElement('h6');
//         job.classList.add('testimonials__carousel-item-position', 'h6-global-font');
//         job.textContent = testimonial.testimonialJob;
//         textBlock.appendChild(job);

//         // Create testimonial testimonial
//         const testimonialText = document.createElement('p');
//         testimonialText.classList.add('testimonials__carousel-item-testimonial', 'body-global-font');
//         testimonialText.textContent = testimonial.testomonialText;
//         textBlock.appendChild(testimonialText);

//         testimonialItem.appendChild(textBlock);

//         carouselItemsHolder.appendChild(testimonialItem);
//     });
  
//     let currentPosition = 0;
//     const itemWidth = 200;
//     const itemsContainerWidth = carouselItemsHolder.offsetWidth;
//     const itemsCount = testimonials.length;
//     const maxVisibleItems = Math.floor(itemsContainerWidth / itemWidth);
//     const maxPosition = itemsCount - maxVisibleItems;
  
//     function updateCarouselButtons() {
//       leftButton.disabled = currentPosition <= 0;
//       rightButton.disabled = currentPosition >= maxPosition;
//     }
  
//     function moveCarousel(direction) {
//       if (direction === 'left' && currentPosition > 0) {
//         currentPosition--;
//       } else if (direction === 'right' && currentPosition < maxPosition) {
//         currentPosition++;
//       }
  
//       carouselItemsHolder.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
//       updateCarouselButtons();
//     }
  
//     leftButton.addEventListener('click', () => moveCarousel('left'));
//     rightButton.addEventListener('click', () => moveCarousel('right'));
  
//     updateCarouselButtons();
// }




buildTestimonials(testimonialsList);