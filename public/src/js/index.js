var sitename = "Poko";
var headertext = "Poko";
var footertext = "© 2024 Poko";
var primaryColor = "#FF6B35";
var secondaryColor = "#004E89";
var discord = "";
var github = "";

document.title = sitename + " - Unblocked Games";

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = primaryColor;
    }
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.style.backgroundColor = primaryColor;
    });
});
