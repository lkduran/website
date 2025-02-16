// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add background animation
document.addEventListener('DOMContentLoaded', function() {
    const backgroundLayers = document.querySelectorAll('.background-layer');
    backgroundLayers.forEach(layer => {
        layer.style.animation = 'organicMove 30s cubic-bezier(0.4, 0, 0.2, 1) infinite';
    });
});
