/* == MOBILE MENU == */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

/* == CLOSE MOBILE MENU WHEN LINK IS CLICKED == */
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});

/* == ACTIVE NAVIGATION == */
const sections = document.querySelectorAll("section[id]");
function updateActiveNavigation() {
    const scrollPosition = window.scrollY + 150;
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}
window.addEventListener(
    "scroll",
    updateActiveNavigation
);

/* == CONTACT FORM == */
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener(
    "submit", function (event) {
        event.preventDefault();
        const nama = document.getElementById("nama").value;
        alert(`Terima kasih ${nama}! Pesan Anda berhasil diisi.`);
        contactForm.reset();
    }
);

/* == SCROLL TO TOP == */
window.addEventListener(
    "scroll",
    function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 25px rgba(15, 23, 42, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    }
);