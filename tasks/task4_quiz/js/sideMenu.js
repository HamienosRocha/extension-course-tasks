const menu = document.querySelector('.menu');
const backgroundMenu = document.querySelector('.background-menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show-menu');

  backgroundMenu.style.display = 'flex';

  backgroundMenu.addEventListener('click', e => {
    if (e.target.className == 'background-menu') {
      backgroundMenu.style.display = 'none';
      menu.classList.remove('show-menu');
    }
  });
});
