const blogButton = document.querySelector("#write-blog-button");
const modalCancelButton = document.querySelector("button.modal-cancel");
const modal = document.querySelector(".modal-outer-container");

const handleShowModal = () => {
  console.log("Show modal");
  modal.style.display = "flex";
};
const handleHideModal = () => {
  console.log("toggle off");
  modal.style.display = "none";
};

blogButton.addEventListener("click", handleShowModal);
modalCancelButton.addEventListener("click", handleHideModal);
