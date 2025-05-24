let blackCount = document.getElementById("black");
let whiteCount = document.getElementById("white");
let content = document.getElementById("content");
let rotateButton = document.getElementById("rotate");
let whiteImg = document.getElementById("whiteImg");

let i = 0;
let j = 0;
blackCount.innerHTML = `black:${i}`;
whiteCount.innerHTML = `white:${j}`;

function rotate() {
  whiteImg.src = "./dogImages/whiteDog.jpg";

  content.style.animation = "none";
  disableButton();
  let number = Math.round(Math.random() * 10);
  console.log(number);
  if (number % 2 === 0) {
    content.style.animation = "rotate-black 3s linear";
    setTimeout(() => {
      whiteImg.src = "./dogImages/blackDog.jpg";
    }, 3000);
    setTimeout(() => {
      i++;
      blackCount.innerHTML = `black:${i}`;
    }, 3200);
  } else {
    content.style.animation = "rotate-white 3s linear";
    setTimeout(() => {
      j++;
      whiteCount.innerHTML = `white:${j}`;
    }, 3200);
  }
}

function reset() {
  i = 0;
  j = 0;
  blackCount.innerHTML = `black:${i}`;
  whiteCount.innerHTML = `white:${j}`;
}

function disableButton() {
  rotateButton.disabled = true;
  setTimeout(() => {
    rotateButton.disabled = false;
  }, 3000);
}
