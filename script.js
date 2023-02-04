// Variables for modal, overlay and button open and button close
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// Function to add modal open functionality
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// Open modal event
openModalBtn.addEventListener("click", openModal);

// Function to add modal close functionality
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Closes modal when the x button is clicked
closeModalBtn.addEventListener("click", closeModal);

// Closes modal when the overlay is clicked
overlay.addEventListener("click", closeModal);

// Closes modal when Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
