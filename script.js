const button = document.querySelector(".btn");
const onClick = document.querySelector(".sign-in-modal");
const close = document.querySelector(".close-button");
const contentClose = document.querySelector(".modal-content");

button.addEventListener("click", () => {
  onClick.style.display = "flex";
});

close.addEventListener("click", () => {
  onClick.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (onClick === e.target) {
    onClick.style.display = "none";
  }
});

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  // dropDownMenu.style.display = "flex";

  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// toggleBtn.addEventListener("click", (e) => {
//   dropDownMenu.style.display = "flex";
// });
