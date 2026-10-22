'use strict';
// Carrusel de ancho real: la copia comienza exactamente donde acaba el primer ciclo.
const section = document.querySelector('.testimonials');
const viewport = section.querySelector('.testimonial-window');
const track = section.querySelector('.testimonial-track');
const group = section.querySelector('.testimonial-group');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const clone = group.cloneNode(true);
clone.setAttribute('aria-hidden', 'true');
clone.inert = true;
track.append(clone);
function measureCarousel() {
  const distance = clone.offsetLeft - group.offsetLeft;
  track.style.setProperty('--marquee-distance', `${distance}px`);
  track.style.setProperty('--marquee-duration', `${distance / 24}s`);
  section.classList.add('is-ready');
}
function syncMotionPreference() {
  section.classList.toggle('no-motion', reducedMotion.matches);
  measureCarousel();
}
const resizeObserver = new ResizeObserver(measureCarousel);
resizeObserver.observe(group);
reducedMotion.addEventListener('change', syncMotionPreference);
document.fonts.ready.then(measureCarousel);
syncMotionPreference();
// ACTIVIDAD_URL se cambia directamente en el href del HTML.
const activity = document.querySelector('#activity-link');
activity.addEventListener('click', event => {
  if (activity.getAttribute('href') === '#actividad-pendiente') event.preventDefault();
});
