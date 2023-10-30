document.addEventListener("DOMContentLoaded", function() {
    var scrollArrow = document.getElementById('scroll-arrow');

    scrollArrow.addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight * 0.75, // scroll down by the height of the viewport
            behavior: 'smooth'
        });
    });
});
