const modal = document.querySelector(".modal-bg");
const close = document.querySelector(".close");
const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");

close.addEventListener("click", () => {
  modal.classList.toggle("is-modal-active");
});

function openNav() {
  burger.classList.toggle("change");
  navItems.classList.toggle("nav-open");
}

const openModal = document.querySelector(".open-modal");
if (openModal)
  openModal.addEventListener("click", () => {
    modal.classList.toggle("is-modal-active");
  });
