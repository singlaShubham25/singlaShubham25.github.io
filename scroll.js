// animation while scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add(`show`);
    } else {
      entry.target.classList.remove(`show`);
    }
  });
});
const hiddenElements = document.querySelectorAll(`.hidden`);
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add(`show1`);
    } else {
      entry.target.classList.remove(`show1`);
    }
  });
});
const hiddenElements1 = document.querySelectorAll(`.hidden1`);
hiddenElements1.forEach((el) => observer1.observe(el));

// nav bar remove while scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};
