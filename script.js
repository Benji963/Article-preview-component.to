const shareHidden = document.querySelector(".share-hidden");
const button = document.querySelector(".share-button");
button.addEventListener("click", function () {
  this.classList.toggle("visible");
  shareHidden.classList.toggle("visible");
});
