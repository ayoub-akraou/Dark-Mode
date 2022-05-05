const btn = document.querySelector(".btn");
const root = document.documentElement;
if (localStorage.mode) {
  document.body.classList.add(localStorage.mode);
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.mode = "dark-mode";
  } else {
    localStorage.mode = "";
  }
});
