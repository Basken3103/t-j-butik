// Går tilbage til index.html 
document.addEventListener("DOMContentLoaded", function () {     
    document.getElementById('go-back-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});