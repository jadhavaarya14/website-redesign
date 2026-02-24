// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= COUNTER ANIMATION (FIXED) =================
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / 100;

            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });

        counterStarted = true;
    }
});


// LOADER
window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});

// SCROLL PROGRESS BAR
window.addEventListener("scroll", function(){
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});

// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
// ================= TYPING EFFECT =================
const typingText = [
    "Reimagine Business Processes",
    "Innovative IT & BPO Solutions",
    "Driving Digital Transformation"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === typingText.length){
        count = 0;
    }
    currentText = typingText[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 80);
    }
})();


// ================= DARK MODE TOGGLE =================
const toggleTheme = document.querySelector(".theme-toggle");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// ================= 3D TILT EFFECT =================
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * 20;
        const rotateY = (x / rect.width - 0.5) * -20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});
const heroSpans = document.querySelectorAll(".hero h1 span");

heroSpans.forEach((span, i) => {
    span.style.transitionDelay = `${i * 0.1}s`;
    span.classList.add("active");
});
if(toggle){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

const courseCards = document.querySelectorAll('.course-card');

window.addEventListener('scroll', () => {
    courseCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

