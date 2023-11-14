export default function initMenu() {
  const menuToggle = document.querySelector(".menu-icon");

  function menuuu() {
    menuToggle.classList.toggle("ativo");
    console.log(menuToggle);
  }

  menuToggle.addEventListener('click', menuuu);
}
