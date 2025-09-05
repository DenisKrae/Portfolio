// Year + Theme Toggle
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById('themeBtn');
const key = 'dk-theme';
const saved = localStorage.getItem(key);
if (saved) document.documentElement.setAttribute('data-theme', saved);

if (btn) {
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'light' ? 'dark' : 'light';
    if (next === 'dark') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
  });
}

// Smooth scroll for in-page anchor links
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
