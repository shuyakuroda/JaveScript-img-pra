"use strict"

// const icons = document.querySelectorAll(".icons");
// const selectedIcon = document.getElementById("selectedIcon");

// icons.forEach(icon =>{
//   icon.addEventListener("click", function() {
//     icons.forEach(i => i.classList.remove("active"));
//     this.classList.add("active");
//     selectedIcon.src = this.src;
//   });
// });

// const btn = document.querySelectorAll(".btn");
// btn.forEach(btn => {
//   btn.addEventListener("click",function(){
//     alert(this.textContent);
//   });
// });

// const fruits = document.querySelectorAll(".item");
// fruits.forEach(fruit => {
//   fruit.addEventListener("click",function(){
//     fruits.forEach(i => i.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

// const buttons = document.querySelectorAll(".btn");
// buttons.forEach(button => {
//   button.addEventListener("click",function(){
//     buttons.forEach(i => i.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

// const fruits = document.querySelectorAll(".item");
// fruits.forEach(fruit => {
//   fruit.addEventListener("click",function(){
//     alert(this.textContent);
//   });
// });

// const box = document.querySelector(".box");
//   box.addEventListener("click",function(){
//     this.classList.toggle("active");
//   });



const color = document.getElementById("colorPicker");
const cardForm = document.getElementById("cardForm");
const btn = document.getElementById("btn");
const card = document.getElementById("card");
const icns = document.querySelectorAll(".icn");
const cardIcon = document.getElementById("cardIcon");
const cardText = document.getElementById("cardText");
const cardMessage = document.getElementById("cardMessage");
const reset = document.getElementById("reset");

let selectedIcn = "";

icns.forEach(icn => {
  icn.addEventListener("click", function () {
    icns.forEach(i => i.classList.remove("active"));
    this.classList.add("active");
    selectedIcn = this.src;
  });
});

cardForm.addEventListener("submit", function (e) {
  e.preventDefault();
  card.style.background = color.value;
  if (selectedIcn !== "") {
    cardIcon.src = selectedIcn;
  }

  if(cardText.value === "") {
    alert("文字を入力してください")
  }else {
      cardMessage.textContent = cardText.value;
  }
});

reset.addEventListener("click",function(){
  card.style.background = "";
  cardIcon.src = "";
  cardMessage.textContent = "My Card";
  cardText.value = "";
  selectedIcn = "";
  icns.forEach(i => i.classList.remove("active"));
});
