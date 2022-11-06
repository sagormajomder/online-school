"use strict";

window.onload = () => {
   mainFunction();
};

const mainFunction = function () {
   //Mobile Nagigation Work
   const btnMobile = document.querySelector(".btn-nav-mobile");
   const header = document.querySelector(".header");

   btnMobile.addEventListener("click", function () {
      header.classList.toggle("nav-open");
   });
};
