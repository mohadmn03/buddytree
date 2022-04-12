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
// let rightArrow = document.querySelector(".arrow .arrow-right");
// let leftArrow = document.querySelector(".arrow .arrow-left");
// let boxOne = document.querySelector(".third .container .members .boxs .boxs-1");
// let boxTwo = document.querySelector(".third .container .members .boxs .boxs-2");
// rightArrow.addEventListener("click", (event) => {
//   boxOne.classList.add("mov-to-left");
//   boxTwo.classList.add("mov-to-left");
// });
// leftArrow.addEventListener("click", (event) => {
//   boxOne.classList.remove("mov-to-left");
//   boxTwo.classList.remove("mov-to-left");
// });
//end moving to left
let rightArrow = document.querySelector(".arrow .arrow-right");
let leftArrow = document.querySelector(".arrow .arrow-left");
let boxs = document.querySelectorAll(".third .container .members .boxs .ofm");
console.log(boxs);
//
let moveconf = 0;
rightArrow.addEventListener("click", (event) => {
  boxs.forEach((box) => {
    box.style.cssText = `transform: translateX(${-100 + moveconf}%)`;
  });
  for (let i = 0; i < 1; i++) {
    moveconf -= 100;
  }
  //
  if (moveconf === -200) {
    moveconf = 100;
  }
});
// //
// moveconf = 0;
// leftArrow.addEventListener("click", (event) => {
//   boxs.forEach((box) => {
//     box.style.cssText = `transform: translateX(${100 + moveconf}%)`;
//   });
//   for (let i = 0; i < 1; i++) {
//     moveconf += 100;
//   }
//   //
//   if (moveconf === 0) {
//     moveconf = -400;
//   }
// });
// //
