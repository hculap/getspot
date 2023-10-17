document.addEventListener("DOMContentLoaded", function() {
    var scrollArrow = document.getElementById('scroll-arrow');

    scrollArrow.addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight * 0.75, // scroll down by the height of the viewport
            behavior: 'smooth'
        });

        // Hide the arrow after it is clicked
        this.style.visibility = 'hidden';
    });

    window.addEventListener('scroll', function() {
        // Hide the arrow when the page is scrolled
        scrollArrow.style.visibility = 'hidden';
    });
});
