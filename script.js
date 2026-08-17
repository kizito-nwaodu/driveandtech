const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const themeToggle = document.getElementById('themeToggle');

function closeMenu() {
  if (!menuBtn || !mobileNav) return;
  mobileNav.classList.remove('open');
  mobileNav.hidden = true;
  menuBtn.textContent = '☰';
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Open menu');
}

menuBtn?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  mobileNav.hidden = !isOpen;
  menuBtn.textContent = isOpen ? '×' : '☰';
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const savedTheme = localStorage.getItem('driveandtech-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle?.setAttribute('aria-pressed', 'true');
}

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  localStorage.setItem('driveandtech-theme', isDark ? 'dark' : 'light');
});