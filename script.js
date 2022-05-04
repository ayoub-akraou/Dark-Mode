const btn = document.querySelector(".btn");
const root = document.documentElement;
btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");
});
