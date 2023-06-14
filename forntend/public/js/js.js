const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const cdone = document.querySelector(".cdone");

sign_up_btn.addEventListener("click", () => {
  cdone.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  cdone.classList.remove("sign-up-mode");
});