const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('open');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
});

window.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});
