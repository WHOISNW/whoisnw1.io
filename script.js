// Select the menu icon and the navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Function to toggle the menu on mobile devices
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Assuming 'bx-x' is a class for the menu icon
    navbar.classList.toggle('active'); // 'active' class will toggle the visibility of the navbar
};

// Function to reset navbar on larger screens
const handleScreenResize = () => {
    let screenWidth = window.innerWidth;

    // On widescreen or laptop screens, ensure the menu is visible and not toggled off
    if (screenWidth > 1285) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
};

// Run the function on load to ensure the correct navbar state
window.addEventListener('load', handleScreenResize);

// Run the function whenever the screen is resized
window.addEventListener('resize', handleScreenResize);

// Smooth scroll to contact form when contact button is clicked
document.getElementById('contact-btn').addEventListener('click', function() {
    console.log("Button clicked!"); // For debugging, you can remove this later
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
});
