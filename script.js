// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;

    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode on change
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;

    // Function to move to a specific slide
    const goToSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slideCount) % slideCount;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    // Auto advance slides
    const startSlideshow = () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 3000); // Change slide every 3 seconds
    };

    // Pause on hover
    const slideshow = document.querySelector('.photo-slideshow');
    slideshow.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slideshow.addEventListener('mouseleave', () => {
        startSlideshow();
    });

    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Start the slideshow
    startSlideshow();
});