// Navbar
[
  document.querySelector("#open--menu"),
  document.querySelector("#close--menu"),
].forEach((btn) =>
  btn.addEventListener("click", (e) =>
    e.currentTarget.parentElement.parentElement.classList.toggle("active")
  )
);
