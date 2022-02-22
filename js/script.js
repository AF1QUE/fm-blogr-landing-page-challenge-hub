// Mobile hamburger toggle

const nav = document.querySelector(".nav");

const navIcon = document.querySelector(".nav__icon");
let flag = 0;
navIcon.addEventListener("click", () => {
  if (flag % 2 === 0) {
    navIcon.src = "images/icon-close.svg";
    nav.style.display = "block";
    flag++;
  } else {
    navIcon.src = "images/icon-hamburger.svg";
    nav.style.display = "none";
    flag++;
  }
  console.log(flag);
});

// Inner DropDown Toggles

const dropDown = document.querySelectorAll(".mobile-header .dropdown");

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", (e) => {
    dropDown[i].classList.toggle("active");
    dropDown[i].nextElementSibling.classList.toggle("active--inner");
  });
}
