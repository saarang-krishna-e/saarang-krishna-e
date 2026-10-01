// Current year in footer

document.getElementById("year").textContent = new Date().getFullYear();


// Highlight navigation link while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "#aaa";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "white";
        }

    });

});
