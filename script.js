var footerFacebookButtonImageIcon = document.getElementById(
"footerFacebookButtonImageIcon"
);
if (footerFacebookButtonImageIcon) {
footerFacebookButtonImageIcon.addEventListener("click", function () {
    window.open("https://www.facebook.com/akureyinc/");
});
}

var footerLinkedinButtonImageIcon = document.getElementById(
"footerLinkedinButtonImageIcon"
);
if (footerLinkedinButtonImageIcon) {
footerLinkedinButtonImageIcon.addEventListener("click", function () {
    window.open("https://www.linkedin.com/company/akureyinc/mycompany/");
});
}

var footerInstagramButtonImageIcon = document.getElementById(
"footerInstagramButtonImageIcon"
);
if (footerInstagramButtonImageIcon) {
footerInstagramButtonImageIcon.addEventListener("click", function () {
    window.open("https://www.instagram.com/akureyinc/");
});
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
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