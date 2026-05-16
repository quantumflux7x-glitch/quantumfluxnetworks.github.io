// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect (adds subtle shadow when scrolling)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 15, 0.98)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.1)';
  } else {
    navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Console signature
console.log("%c⚡ Quantum Flux Networks v1.0 Online ⚡\nFluxing the Future – Built by Quantum Flux7X", 
  "color:#00ffff; font-size:14px; font-family:monospace;");

// Future hook for animations
console.log("%cReady for more sections, blog, and Neural Archive...", 
  "color:#ff00ff; font-size:12px;");