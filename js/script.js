// Mobile hamburger toggle

const navBlock = document.querySelector(".nav__block");

const navIcon = document.querySelector(".nav__icon");
let flag = 0;
navIcon.addEventListener("click", () => {
  if (flag % 2 === 0) {
    navIcon.src = "images/icon-close.svg";
    navBlock.style.display = "block";
    flag++;
  } else {
    navIcon.src = "images/icon-hamburger.svg";
    navBlock.style.display = "none";
    flag++;
  }

  console.log(flag);
});

//
