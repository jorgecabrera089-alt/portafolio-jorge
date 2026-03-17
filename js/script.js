document.addEventListener('DOMContentLoaded', () => {
  const spidey = document.getElementById('spidey');
  const scrollThreshold = 220;

  const updateSpideyVisibility = () => {
    if (!spidey) return;
    spidey.style.display = window.scrollY > scrollThreshold ? 'flex' : 'none';
  };

  updateSpideyVisibility();

  window.addEventListener('scroll', updateSpideyVisibility);
});
