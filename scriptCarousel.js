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
    const leftButton = document.querySelector('.testimonials__carousel-left-button-desktop');
    const rightButton = document.querySelector('.testimonials__carousel-right-button-desktop');
  
    testimonials.forEach(testimonial => {
        // Create testimonial item container
        const testimonialItem = document.createElement('div');
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
  
    let currentPosition = 0;
    const itemWidth = 200;
    const itemsContainerWidth = carouselItemsHolder.offsetWidth;
    const itemsCount = testimonials.length;
    const maxVisibleItems = Math.floor(itemsContainerWidth / itemWidth);
    const maxPosition = itemsCount - maxVisibleItems;
  
    function updateCarouselButtons() {
      leftButton.disabled = currentPosition <= 0;
      rightButton.disabled = currentPosition >= maxPosition;
    }
  
    function moveCarousel(direction) {
      if (direction === 'left' && currentPosition > 0) {
        currentPosition--;
      } else if (direction === 'right' && currentPosition < maxPosition) {
        currentPosition++;
      }
  
      carouselItemsHolder.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
      updateCarouselButtons();
    }
  
    leftButton.addEventListener('click', () => moveCarousel('left'));
    rightButton.addEventListener('click', () => moveCarousel('right'));
  
    updateCarouselButtons();
}

buildTestimonials(testimonialsList);