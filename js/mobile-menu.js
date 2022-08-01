(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleModal);
  refs.closeMobileMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();