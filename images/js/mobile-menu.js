const menuRefs = {
  openMenuBtn: document.querySelector(".menu-close-btn"),
  closeMenuBtn: document.querySelector(".hamburger"),
  menu: document.querySelector(".mobile-menu"),
  body: document.querySelector("body"),
  hamburger: document.querySelector(".hamburger"),
};

function toggleMenu() {
  menuRefs.menu?.classList.toggle("is-hidden");
  menuRefs.menu?.classList.toggle("menu-animation");
  // @ts-ignore
  menuRefs.body?.classList.toggle("overflow-hidden");
  menuRefs.hamburger?.classList.toggle("hamburger-anim");
}

menuRefs.openMenuBtn?.addEventListener("click", toggleMenu);
menuRefs.closeMenuBtn?.addEventListener("click", toggleMenu);