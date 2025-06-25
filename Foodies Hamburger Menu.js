const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

// Show the menu when hamburger icon is clicked
hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

// Prevent menu from closing when clicking inside the nav
nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

// Hide the menu when close (X) icon is clicked
closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

// Hide the menu if user clicks anywhere outside
window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})
