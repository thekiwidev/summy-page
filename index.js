document.querySelector(".hamburger .ham").addEventListener("click", () => {
  document.querySelector("#header .social").classList.add("show");
});

document
  .querySelector("#header .social .close")
  .addEventListener("click", () => {
    document.querySelector("#header .social").classList.remove("show");
  });
