// меню
const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие - закрытие меню

hamburger.addEventListener('click', () => {
   leftMenu.classList.toggle('openMenu');
});
