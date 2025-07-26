// HAMBURGER MENU FUNCTIONALITY
const hamburgerIcon = document.querySelector('.hamburger-menu-container');

const headerContent = document.querySelector('.header-content');

const closeIcon = document.querySelector('.close-icon');

const nav = document.querySelector('nav');

hamburgerIcon?.addEventListener('click', (e) => {
    e.stopPropagation();
    headerContent?.classList.add('menu-open');
});

nav?.addEventListener('click', (e) => {
    e.stopPropagation();
});

closeIcon?.addEventListener('click', () => {
    headerContent?.classList.remove('menu-open');
});

window.addEventListener('click', () => {
    headerContent?.classList.remove('menu-open');
});


// REAL-TIME DATE AND TIME DISPLAY WITH FADE-IN
function updateDateTime() 
{
    const now = new Date();

    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    if (dateElement && timeElement) 
    {
        dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
        timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
        dateElement.style.opacity = 1;
        timeElement.style.opacity = 1;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();


// SMOOTH SCROLL TO TOP BUTTON
const goToTopBtn = document.querySelector('.go-to-top');

if (goToTopBtn) 
{
    goToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Show/hide on scroll
window.addEventListener('scroll', () => {
    if (goToTopBtn) 
    {
        goToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});


// HIGHLIGHT ACTIVE NAV LINK BASED ON SCROLL
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {
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


// SCROLL-BASED ANIMATION FOR MENU CARDS, FEATURES, REVIEWS
const animatedEls = document.querySelectorAll(".menu-card, .feature-item, .review");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) 
        {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

animatedEls.forEach((el) => observer.observe(el));


// STICKY HEADER SHADOW ON SCROLL
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) 
    {
        headerContent?.classList.add("header-shadow");
    } 
    else 
    {
        headerContent?.classList.remove("header-shadow");
    }
});


// BUTTON RIPPLE EFFECT
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});


// INITIAL FADE-IN STYLING FOR CLOCK ON DOM LOADING
window.addEventListener("DOMContentLoaded", () => {
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


// DARK / LIGHT MODE TOGGLE FUNCTION
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) 
{
    body.classList.add(savedTheme);
}

themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) 
    {
        localStorage.setItem('theme', 'dark-mode');
    } 
    else 
    {
        localStorage.removeItem('theme');
    }
});


// SCROLL PROGRESS BAR AT TOP OF THE PAGE
const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollProgress) 
    {
        scrollProgress.style.width = `${scrollPercent}%`;
    }
});


// FORM VALIDATION BEFORE SUBMISSION
const contactForm = document.querySelector("#contact-form");

contactForm?.addEventListener("submit", function (e) {
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('textarea');

    if (!emailInput.value.includes("@") || messageInput.value.trim() === "") 
    {
        e.preventDefault();
        alert("Please enter a valid email and message.");
    }
});


// SHOW TOOLTIP ON BUTTON HOVER (if set)
document.querySelectorAll('.btn[data-tooltip]').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'btn-tooltip';
        tooltip.textContent = button.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        const rect = button.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 30}px`;
    });

    button.addEventListener('mouseleave', () => {
        document.querySelector('.btn-tooltip')?.remove();
    });
});


// KEYBOARD SHORTCUT
document.addEventListener('keydown', (e) => {
    // Press T to scroll to top
    if (e.key === 't' || e.key === 'T') 
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press M to open hamburger menu (mobile)
    if ((e.key === 'm' || e.key === 'M') && hamburgerIcon) 
    {
        hamburgerIcon.click();
    }
});


// ALERT BANNER WITH CLOSE FUNCTIONALITY
const alertBanner = document.querySelector(".alert-banner");

const alertClose = document.querySelector(".alert-close");

alertClose?.addEventListener("click", () => {
    alertBanner?.classList.add("hide");
});


// COPY TEXT TO CLIPBOARD (for share buttons)
document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-copy");
        if (text) 
        {
            navigator.clipboard.writeText(text)
                .then(() => alert("Copied to clipboard!"))
                .catch(() => alert("Failed to copy."));
        }
    });
});
