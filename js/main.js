/* v0-guide.com — main.js */

// Mark active nav link based on current path
(function markActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .sidebar-nav a').forEach(a => {
    if (a.getAttribute('href') === path ||
        (a.getAttribute('href') !== '/' && path.startsWith(a.getAttribute('href')))) {
      a.classList.add('active');
    }
  });
})();

// Mobile nav toggle (to be wired to a hamburger button)
const mobileToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
