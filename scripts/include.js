// Simple JS to include header and footer HTML into each page
function includeHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('header-include')) {
        includeHTML('header-include', 'header.html');
    }
    if (document.getElementById('footer-include')) {
        includeHTML('footer-include', 'footer.html');
    }
});
