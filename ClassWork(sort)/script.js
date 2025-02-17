// let arr = ["javascript", "html", "css", "react", "nodejs", "typescript"];

// let sortedArr = arr.sort((a, b) => a.length - b.length);

// let shortest = sortedArr[0];

// let longest = sortedArr[sortedArr.length - 1];

// console.log(shortest);
// console.log(longest);

let evenNums = [];
let randomNum = Math.floor(Math.random() * 10);
if (randomNum === 0) {
  console.log("Random eded sifirdir bir daha yoxla:)");
} else if (randomNum % 2 === 0) {
  console.log("Random eded cutdur.");
  evenNums.push(randomNum);
  console.log(evenNums);
} else {
  console.log("Random eded tekdir.");
  console.log(randomNum);
}