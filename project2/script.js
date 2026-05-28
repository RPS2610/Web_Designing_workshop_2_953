// Grab the button element from the HTML
const themeBtn = document.getElementById('theme-btn');

// Add a click event listener to the button
themeBtn.addEventListener('click', function() {
    // Toggle the 'dark-mode' class directly on the body tag
    document.body.classList.toggle('dark-mode');
});