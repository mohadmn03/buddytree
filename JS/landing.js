//start popup
let play = document.querySelector(".landing .container .image .groupesst");
let popup = document.querySelector(".landing .container .popup");
let landing = document.querySelector(".landing");
let exit = document.querySelector(".exit-popup");
play.addEventListener("click", (event) => {
  popup.classList.add("show");
  exit.classList.add("show");
});
exit.addEventListener("click", () => {
  popup.classList.remove("show");
  exit.classList.remove("show");
});
//end popup
//start moving to left
let rightArrow = document.querySelector(".arrow .arrow-right");
let leftArrow = document.querySelector(".arrow .arrow-left");
let boxs = document.querySelectorAll(".third .container .members .boxs .ofm");
//
boxs.forEach((box) => {
  box.style.transform = "translateX(0%)";
  //
  rightArrow.addEventListener("click", (event) => {
    if (box.style.transform === "translateX(0%)") {
      box.style.transform = "translateX(-100%)";
    } else if (box.style.transform === "translateX(-100%)") {
      box.style.transform = "translateX(-200%)";
    } else if (box.style.transform === "translateX(-200%)") {
      box.style.transform = "translateX(0%)";
    }
  });
  //
  leftArrow.addEventListener("click", (event) => {
    if (box.style.transform === "translateX(0%)") {
      box.style.transform = "translateX(-200%)";
    } else if (box.style.transform === "translateX(-100%)") {
      box.style.transform = "translateX(0%)";
    } else if (box.style.transform === "translateX(-200%)") {
      box.style.transform = "translateX(-100%)";
    }
  });
  //
});
//end moving to left
