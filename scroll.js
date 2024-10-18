// animation while scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`show`);
    }
  });
});
const hiddenElements = document.querySelectorAll(`.hidden`);
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`show1`);
    }
  });
});
const hiddenElements1 = document.querySelectorAll(`.hidden1`);
hiddenElements1.forEach((el) => observer1.observe(el));

// tab links button
let tabLinks = document.querySelectorAll(".links");
let tabContents = document.querySelectorAll(".content");

function opentab(tabName) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// // nav bar remove while scrolling
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0px";
//   } else {
//     document.getElementById("navbar").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// };
