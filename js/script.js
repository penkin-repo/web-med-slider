$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    variableWidth: true,
  });
});

const humbCloseEl = document.querySelector(".fa-xmark");
const hMenu = document.querySelector(".header__h-menu");
const funcClose = () => {
  hMenu.style.transform = "translateY(-500px)";
};
humbCloseEl.addEventListener("click", funcClose);

const humbOpenEl = document.querySelector(".fa-bars");
const funcOpen = () => {
  hMenu.style.transform = "translateY(0px)";
};
humbOpenEl.addEventListener("click", funcOpen);
