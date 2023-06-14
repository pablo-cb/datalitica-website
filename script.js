// _____________________________________________________________________________________________  NAVBAR


// Adding the navbar to page

const navbarPlaceholder = document.querySelector('.navbar-container');
window.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navbarPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

function toggleMenu() {
    const menuContainer = document.querySelector(".navbar-items");
    const hamburgerButton = document.querySelector(".navbar__hamburger-menu");
    const navbarColor = document.querySelector(".navbar");
    const changeLogoColor = document.querySelector(".navbar__button-logo-home");

    menuContainer.classList.toggle("active");
    hamburgerButton.classList.toggle("active");
    navbarColor.classList.toggle("active");
    navbarPlaceholder.classList.toggle("active");
    changeLogoColor.classList.toggle("active");
}

const indexMobileItems = document.querySelectorAll(".navbar-items__item");
indexMobileItems.forEach(item => {
    item.addEventListener('click', toggleMenu);
});

// _____________________________________________________________________________________________  FOOTER

// Adds footer section

const footerPlaceholder = document.querySelector('.footer');
window.addEventListener('DOMContentLoaded', function() {
    if (footerPlaceholder) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'footer.html', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          footerPlaceholder.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    }
  });


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
};


const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
const observer = new IntersectionObserver(
(entries) => {
    for (const entry of entries) {

    console.log("entry.isIntersecting " + entry.isIntersecting);
    console.log("entry.intersectionRatio " + entry.intersectionRatio);
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate", "show");
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