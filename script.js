// ============ Mobile navigation toggle ============
const navbar = document.getElementById('navbar');
const burgerBtn = document.getElementById('burgerBtn');

burgerBtn.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('nav-open');
  burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// ============ Back to top button ============
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ Active nav link on scroll ============
const navAnchors = document.querySelectorAll('.nav-link');

const highlightNav = () => {
  let current = '';
  const scrollPos = window.scrollY + 120;

  document.querySelectorAll('section[id]').forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(anchor => {
    anchor.classList.remove('nav-link--active');
    if (anchor.getAttribute('href') === `#${current}`) {
      anchor.classList.add('nav-link--active');
    }
  });
};

window.addEventListener('scroll', highlightNav);
highlightNav();