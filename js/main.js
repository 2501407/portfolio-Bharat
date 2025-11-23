// scroll reveal
const reveals = document.querySelectorAll('.reveal');
function handleReveal() {
  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

// mock form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (demo)');
});