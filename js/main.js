/* ── menu mobile ─────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('navList');

hamburger.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  hamburger.classList.toggle('open', open);
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ── active nav no scroll ────────────────────────────────── */
const sections = document.querySelectorAll('section[id], header[id]');
const links    = document.querySelectorAll('.nav__link');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
  });
}, { threshold: 0.4 });

sections.forEach(s => io.observe(s));

/* ── fade-in ao rolar ────────────────────────────────────── */
const fadeTargets = document.querySelectorAll(
  '.card, .team-member, .article, .bubble, .about__image, .about__content'
);

fadeTargets.forEach(el => {
  el.style.cssText += 'opacity:0;transform:translateY(24px);transition:opacity .55s ease,transform .55s ease';
});

const fadeIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.style.opacity = '1';
    e.target.style.transform = 'none';
    fadeIO.unobserve(e.target);
  });
}, { threshold: 0.15 });

fadeTargets.forEach(el => fadeIO.observe(el));
