// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resume download click event
document.getElementById('resume-btn').addEventListener('click', function() {
    document.getElementById('resume-link').click();
});

// Project filtering
document.getElementById('project-filter').addEventListener('change', function() {
    const filterValue = this.value;
    document.querySelectorAll('.project').forEach(project => {
        if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Process form submission (e.g., send data to server or display a message)
    alert('Thank you for your message, ' + name + '!');
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
