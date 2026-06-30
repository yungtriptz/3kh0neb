// Poko - Main Script
console.log("Welcome to Poko!");

// Set site name in footer
document.addEventListener('DOMContentLoaded', function() {
    // Update footer
    var footer = document.querySelector('footer');
    if (footer) {
        footer.textContent = "© Poko 2024";
    }
});
