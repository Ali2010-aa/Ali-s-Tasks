let arr = ["javascript", "html", "css", "react", "nodejs", "typescript"];

let sortedArr = arr.sort((a, b) => a.length - b.length);

let shortest = sortedArr[0];

let longest = sortedArr[sortedArr.length - 1];

console.log(shortest);
console.log(longest);