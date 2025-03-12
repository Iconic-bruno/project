const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav-linky");
const links = document.querySelectorAll(".nav__menu__link");

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-widthh: 550px").matches) {
  closeMenu();
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}