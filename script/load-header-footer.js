document.addEventListener("DOMContentLoaded", function () {

    // load the header
    fetch('/template/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    // load the footer
    fetch('/template/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});