  const toggleBtn = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.btn-primary');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  }
);
