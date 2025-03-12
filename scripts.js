// Add smooth scrolling to navigation links
document.querySelectorAll('.vertical-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
 
// Trigger animation on page load if the section is already in view
window.addEventListener('load', () => {
  const skillsSection = document.getElementById('skills');
  if (isInViewport(skillsSection)) {
    animateProgressBars();
    window.removeEventListener('scroll', handleScroll); // Stop listening after animation
  }
});
  // Add hover effect to cards
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('form');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    if (name && phone && email) {
      alert(`Thank you, ${name}! Your message has been submitted.`);
      contactForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });