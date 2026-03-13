document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
