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

