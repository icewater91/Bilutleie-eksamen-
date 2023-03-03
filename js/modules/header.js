export default function Header() {

  // query selectors
  var menuItems = document.querySelector('#menuItems');
  const menuIcon = document.querySelector('.menu-icon');
  menuItems.style.maxHeight = "0px";

  // event listener
  menuIcon.addEventListener('click', toggleMenu);

  // handler
  function toggleMenu() {
    if (menuItems.style.maxHeight == "0px") {
      menuItems.style.maxHeight = "200px";
    } else {
      menuItems.style.maxHeight = "0px";
    }
  }
}