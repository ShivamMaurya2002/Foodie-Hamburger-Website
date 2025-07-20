// Hamburger Menu Toggle
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav');

hamburgerIcon.addEventListener('click', () => {
  nav.classList.add('show-nav');
});
closeIcon.addEventListener('click', () => {
  nav.classList.remove('show-nav');
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('show-nav');
  });
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-section');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.section, .hero-section').forEach(section => {
  section.classList.add('hidden-section');
  observer.observe(section);
});

// Go To Top
const topBtn = document.querySelector('.go-to-top');
topBtn.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Highlight Active Nav Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Header Hide on Scroll Down
let lastScrollTop = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Page Fade In
window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});

// Real-Time Date and Clock
function updateDateTime() {
  const now = new Date();

  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', dateOptions);

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById('date').textContent = formattedDate;
  document.getElementById('clock').textContent = formattedTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
