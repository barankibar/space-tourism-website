$(".hamburger").ready(() => {
  $(".hamburger").click(() => {
    if ($("#nav-links").hasClass("hide")) {
      $("#nav-links").removeClass("hide");
      hamButton.classList.add("d-none");
      closeButton.classList.remove("d-none");
    } else {
      navLinks.classList.add("hide");
      closeButton.classList.add("d-none");
      hamButton.classList.remove("d-none");
    }
  });
});
const closeButton = document.querySelector(".closeButton");
const hamButton = document.querySelector(".hamButton");
const navLinks = document.querySelector("#nav-links");
navLinks.classList.add("hide");
