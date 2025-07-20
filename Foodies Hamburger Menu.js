// Hamburger Menu Functionality

const hamburgerIcon = document.querySelector('.hamburger-menu-container');

const headerContent = document.querySelector('.header-content');

const closeIcon = document.querySelector('.close-icon');

const nav = document.querySelector('nav');

hamburgerIcon.addEventListener('click', (e) => 
    {
    e.stopPropagation();
    headerContent.classList.add('menu-open');
});

nav.addEventListener('click', (e) => 
    {
    e.stopPropagation();
});

closeIcon.addEventListener('click', () => 
    {
    headerContent.classList.remove('menu-open');
});

window.addEventListener('click', () => 
    {
    headerContent.classList.remove('menu-open');
});



// Real-Time Date and Time Display with Fade-In

function updateDateTime() 
{
    const now = new Date();

    const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    if (dateElement && timeElement) 
        {
        dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
        timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);


        // Add fade-in effect on load

        dateElement.style.opacity = 1;
        timeElement.style.opacity = 1;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();



// Smooth Scroll to Top Button

const goToTopBtn = document.querySelector('.go-to-top');

if (goToTopBtn) 
    {
    goToTopBtn.addEventListener('click', (e) => 
        {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}



// Highlight Active Nav Link on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => 
    {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) 
            {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) 
            {
            link.classList.add("active");
        }
    });
});



// Animate Elements on Scroll (Menu, Features, Reviews)

const animatedEls = document.querySelectorAll(".menu-card, .feature-item, .review");

const observer = new IntersectionObserver(
    (entries) => 
        {
        entries.forEach((entry) => 
            {
            if (entry.isIntersecting) 
                {
                entry.target.classList.add("animate-fade-in");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3
    }
);

animatedEls.forEach((el) => 
    observer.observe(el));



// Sticky Header Shadow on Scroll

window.addEventListener("scroll", () => 
    {
    if (window.scrollY > 50) 
        {
        headerContent.classList.add("header-shadow");
    } 
    else 
    {
        headerContent.classList.remove("header-shadow");
    }
});



// Button Ripple Effect

document.querySelectorAll('.btn').forEach(button => 
    {
    button.addEventListener('click', function (e) 
    {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});



// Clock Fade-In Initial Style

window.addEventListener("DOMContentLoaded", () => 
    {
    const dateEl = document.getElementById("current-date");
    const timeEl = document.getElementById("current-time");

    if (dateEl && timeEl) 
        {
        dateEl.style.opacity = 0;
        dateEl.style.transition = "opacity 1s ease-in-out";
        timeEl.style.opacity = 0;
        timeEl.style.transition = "opacity 1s ease-in-out";
    }
});
