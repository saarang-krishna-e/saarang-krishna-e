/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

function updateNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateNavigation);

updateNavigation();


/* =========================
   FADE-IN ANIMATION
========================= */

const animatedElements =
    document.querySelectorAll(
        ".section-content, .hero-content, .hero-profile"
    );


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(function (element) {

    element.classList.add("fade-in");

    observer.observe(element);

});
