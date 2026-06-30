console.log("Welcome to Poko!");

document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    if (footer) {
        footer.textContent = "© Poko 2024";
    }
});
