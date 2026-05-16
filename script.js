// Simple smooth scroll + future animation hook
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Future neon pulse effect
  console.log("%c⚡ Quantum Flux Networks Online ⚡", "color:#00ffff; font-size:14px;");