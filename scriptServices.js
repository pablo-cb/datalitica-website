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
        expandIcon.setAttribute('src', './public/home/services/blue-plus-icon.svg');
        expandIcon.setAttribute('alt', 'blue plus icon');

        // Create the minimize icon
        const minimizeIcon = document.createElement('img');
        minimizeIcon.classList.add('services__expand-card-minimize-icon');
        minimizeIcon.setAttribute('src', './public/home/services/blue-minus-icon.svg');
        minimizeIcon.setAttribute('alt', 'blue minus');
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

            // Eliminar la clase "expanded" de todos los elementos ".services__expand-card"
            const expandCards = document.querySelectorAll('.services__expand-card');
            expandCards.forEach(card => {
                card.classList.remove("expanded");
            });

            // Reset the previous active card
            if (activeCard) {
                activeCard.querySelector('.services__expand-card-expanded').maxHeight = '0';
                activeCard.querySelector('.services__expand-card-minimize-icon').style.display = 'none';
                activeCard.querySelector('.services__expand-card-expand-icon').style.display = 'inline-block';
            }

            // Toggle the expand/minimize icons and expanded text for the clicked card
            minimizeIcon.style.display = isCardActive ? 'none' : 'inline-block';
            expandIcon.style.display = isCardActive ? 'inline-block' : 'none';

            // Update the activeCard variable based on the toggle
            activeCard = isCardActive ? null : expandCard;

            // Update the icon for the clicked card
            if (!isCardActive) {
                expandIcon.style.display = 'none';
                minimizeIcon.style.display = 'inline-block';
                expandCard.classList.add("expanded");
            }
        });
    });
}

buildServicesHTML(servicesList);