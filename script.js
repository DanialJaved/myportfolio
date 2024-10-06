// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Scroll to the start of each section
      });
    });
  });
  
  // Intersection Observer for revealing sections on scroll
  const sections = document.querySelectorAll('.section');
  
  const options = {
    root: null,
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // Add a class when in view
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  