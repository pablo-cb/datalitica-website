
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

testimonialsList.push({
    testimonialPhoto: './public/home/testimonials/testimonials--carouselitemimage@2x.png',
    testimonialName: 'Angela Smith 7',
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


/*  EL siguiente código sí funciona

// Controlador de evento para el botón de desplazamiento izquierdo
carouselLeftButton.addEventListener('click', () => {
    const gap = getComputedStyle(carouselItemsHolder).gap;
    const gapSize = parseInt(gap);
    const screenWidth = window.innerWidth;
  
    let scrollAmount = carouselItemsHolder.offsetWidth;
  
    if (screenWidth >= 1200) {
      // Desktop
      scrollAmount += 2 * gapSize;
    } else if (screenWidth >= 720 && screenWidth < 1200) {
      // Small desktop
      scrollAmount += gapSize;
    } else if (screenWidth < 720) {
      // Tablet and mobile
      scrollAmount += gapSize;
    }
  
    carouselItemsHolder.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
  
  // Controlador de evento para el botón de desplazamiento derecho
  carouselRightButton.addEventListener('click', () => {
    const gap = getComputedStyle(carouselItemsHolder).gap;
    const gapSize = parseInt(gap);
    const screenWidth = window.innerWidth;
  
    let scrollAmount = carouselItemsHolder.offsetWidth;
  
    if (screenWidth >= 1200) {
      // Desktop
      scrollAmount += 2 * gapSize;
    } else if (screenWidth >= 720 && screenWidth < 1200) {
      // Small desktop
      scrollAmount += gapSize;
    } else if (screenWidth < 720) {
      // Tablet and mobile
      scrollAmount += gapSize;
    }
  
    carouselItemsHolder.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

*/



//  ______________________________________________________________________________________ Carousel Buttons


  // Función para determinar el ancho de los items según la cantidad de items visibles
  function setItemWidth() {
    const screenWidth = window.innerWidth;
    const testimonialsListLength = testimonialsList.length;
    let itemWidth;
    let gap;
  
    if (screenWidth >= 1200) {
      // Desktop
      if (testimonialsListLength === 2) {
        itemWidth = `calc((100% - 2rem) / 2)`;
        gap = `2rem`;
        carouselLeftButton.style.display = 'none';
        carouselRightButton.style.display = 'none';
      } else if (testimonialsListLength === 1) {
        itemWidth = `100%`;
        gap = `0`;
        carouselLeftButton.style.display = 'none';
        carouselRightButton.style.display = 'none';
      } else if (testimonialsListLength === 3) {
        itemWidth = `calc((100% - 2rem) / 3)`;
        gap = `2rem`;
        carouselLeftButton.style.display = 'none';
        carouselRightButton.style.display = 'none';
      } else if (testimonialsListLength > 3 && testimonialsListLength % 3 + 1 === 1) {
        itemWidth = `calc((100% - 2rem) / 3)`;
        gap = `2rem`;
        carouselLeftButton.style.display = 'block';
        carouselRightButton.style.display = 'block';
      } else if (testimonialsListLength > 3 && testimonialsListLength % 3 + 2 === 2) {
        itemWidth = `calc((100% - 2rem) / 3)`;
        gap = `2rem`;
        carouselLeftButton.style.display = 'block';
        carouselRightButton.style.display = 'block';
      }
    } else if (screenWidth >= 720 && screenWidth < 1200) {
      // Small desktop
      if (testimonialsListLength === 1) {
        itemWidth = `100%`;
        gap = `0`;
        carouselLeftButton.style.display = 'none';
        carouselRightButton.style.display = 'none';
      } else if (testimonialsListLength === 2) {
        itemWidth = `100%`;
        gap = `0`;
        carouselLeftButton.style.display = 'none';
        carouselRightButton.style.display = 'none';
      } else if (testimonialsListLength > 2 && testimonialsListLength % 2 + 1 === 1) {
        itemWidth = `calc((100% - 2rem) / 2)`;
        gap = `2rem`;
        carouselLeftButton.style.display = 'block';
        carouselRightButton.style.display = 'block';
      }
    } else if (screenWidth < 720) {
      // Tablet and mobile
      if (testimonialsListLength === 1) {
        itemWidth = `100%`;
        gap = `0`;
        carouselLeftButton.style.display = 'none';
        carouselRightButton.style.display = 'none';
      }
    }
  
    carouselItemsHolder.style.setProperty('--item-width', itemWidth);
    carouselItemsHolder.style.setProperty('--gap', gap);
  }
  
  // Controlador de evento para el botón de desplazamiento izquierdo
  carouselLeftButton.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    const testimonialsListLength = testimonialsList.length;
  
    let scrollAmount = carouselItemsHolder.offsetWidth;
  
    if (screenWidth >= 1200) {
      // Desktop
      if (testimonialsListLength > 3 && testimonialsListLength % 3 + 1 === 1) {
        scrollAmount += 2 * parseFloat(getComputedStyle(carouselItemsHolder).getPropertyValue('gap'));
      } else if (testimonialsListLength > 3 && testimonialsListLength % 3 + 2 === 2) {
        scrollAmount += parseFloat(getComputedStyle(carouselItemsHolder).getPropertyValue('gap'));
      }
    } else if (screenWidth >= 720 && screenWidth < 1200) {
      // Small desktop
      if (testimonialsListLength > 2 && testimonialsListLength % 2 + 1 === 1) {
        scrollAmount += parseFloat(getComputedStyle(carouselItemsHolder).getPropertyValue('gap'));
      }
    }
  
    carouselItemsHolder.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
  
  // Controlador de evento para el botón de desplazamiento derecho
  carouselRightButton.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    const testimonialsListLength = testimonialsList.length;
  
    let scrollAmount = carouselItemsHolder.offsetWidth;
  
    if (screenWidth >= 1200) {
      // Desktop
      if (testimonialsListLength > 3 && testimonialsListLength % 3 + 1 === 1) {
        scrollAmount += 2 * parseFloat(getComputedStyle(carouselItemsHolder).getPropertyValue('gap'));
      } else if (testimonialsListLength > 3 && testimonialsListLength % 3 + 2 === 2) {
        scrollAmount += parseFloat(getComputedStyle(carouselItemsHolder).getPropertyValue('gap'));
      }
    } else if (screenWidth >= 720 && screenWidth < 1200) {
      // Small desktop
      if (testimonialsListLength > 2 && testimonialsListLength % 2 + 1 === 1) {
        scrollAmount += parseFloat(getComputedStyle(carouselItemsHolder).getPropertyValue('gap'));
      }
    }
  
    carouselItemsHolder.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
  
  // Controlador de evento para el cambio de tamaño de la ventana
  window.addEventListener('resize', setItemWidth);
  
  // Inicializar el ancho de los items al cargar la página
  setItemWidth();
  