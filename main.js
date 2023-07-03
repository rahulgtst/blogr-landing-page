"use strict";

const dropdowns = document.querySelectorAll(".dropdown");
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

if (window.innerWidth < 600) {
  const arrowImgs = document.querySelectorAll(".icon-arrow-light");
  for (let i = 0; i < 3; i++) {
    arrowImgs[i].src = "images/icon-arrow-dark.svg";
  }
  document.querySelector("#login").style.color =
    "var(--tx-body-very-dark-grayish-blue)";
}

let navOn = false;
menu.addEventListener("click", () => {
  if (navOn) {
    navOn = false;
    nav.style.display = "none";
    menu.src = "images/icon-hamburger.svg";
  } else {
    navOn = true;
    nav.style.display = "flex";
    menu.src = "images/icon-close.svg";
  }
});

for (let len = 0; len < 3; len++) {
  dropdowns[len].addEventListener("click", (e) => {
    e.stopPropagation();
    for (let index = 0; index < 3; index++) {
      dropdowns[index].lastElementChild.style.display = "none";
    }
    dropdowns[len].lastElementChild.style.display = "flex";
  });
}

window.addEventListener("click", () => {
  for (let index = 0; index < 3; index++) {
    dropdowns[index].lastElementChild.style.display = "none";
  }
});
