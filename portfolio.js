// MOSES KWASI SIKAH - Portfolio JS
// Matches: index.html, about.html, projects.html, contact.html

// 1. Mobile Menu
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// 2. Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 3. Contact Form Validation - THIS IS THE BONUS MARK
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const status = document.getElementById('form-status');

    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    status.textContent = '';

    if (!name.value.trim()) { nameError.textContent = 'Please enter your name.'; valid = false; }
    if (!email.value.trim() || !email.value.includes('@') || !email.value.includes('.')) {
      emailError.textContent = 'Please enter a valid email, e.g. moses@gmail.com'; valid = false;
    }
    if (!message.value.trim()) { messageError.textContent = 'Please enter your message.'; valid = false; }

    if (!valid) return;
    status.textContent = 'Thank you ' + name.value.trim() + '! Your message has been sent successfully.';
    status.style.color = 'green';
    form.reset();
  });
}

console.log('Portfolio loaded - napo6484');