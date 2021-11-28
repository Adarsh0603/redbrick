const modal = document.querySelector(".modal-bg");
const close = document.querySelector(".close");
const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");

const openModal = document.querySelector(".open-modal");
openModal.addEventListener("click", () => {
  modal.classList.toggle("is-modal-active");
});

close.addEventListener("click", () => {
  modal.classList.toggle("is-modal-active");
});

function openNav() {
  burger.classList.toggle("change");
  navItems.classList.toggle("nav-open");
}
