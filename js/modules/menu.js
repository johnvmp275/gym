export default function initMenu() {
  const menuToggle = document.querySelector('.menu-icon');

  function menuuu() {
    menuToggle.classList.toggle('ativo');
  }

  menuToggle.addEventListener('click', menuuu);
}
