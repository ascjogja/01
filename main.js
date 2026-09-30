// ============================================================
// Academic Support Center (ASC) - Main JavaScript
// ============================================================

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Hero slider
const slides = [...document.querySelectorAll('.slide')];
const nextBtn = document.querySelector('.slider-control.next');
const prevBtn = document.querySelector('.slider-control.prev');
const dotsWrap = document.querySelector('.slider-dots');
let currentSlide = 0;
let autoSlide;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Buka slide ${index + 1}`);
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(index));
  dotsWrap.appendChild(dot);
});

const dots = [...dotsWrap.querySelectorAll('button')];

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function startAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5500);
}

nextBtn.addEventListener('click', () => { nextSlide(); startAutoSlide(); });
prevBtn.addEventListener('click', () => { prevSlide(); startAutoSlide(); });
startAutoSlide();

// WhatsApp form
const waForm = document.getElementById('waForm');
waForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Nomor WhatsApp tujuan tanpa tanda +, spasi, atau strip
  const adminNumber = '62895391683301';

  const text = [
    '*Konsultasi Academic Support Center (ASC)*',
    '',
    `Nama: ${name}`,
    `No. WA: ${phone}`,
    '',
    '*Pesan:*',
    message
  ].join('\n');

  const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener');
});

// Current year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 450);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
