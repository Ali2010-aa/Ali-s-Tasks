// const fruits = "mango apple pineapple banana orange"
// let fruitsArr = fruits.split(" ");
// let sortedArr = fruitsArr.sort();
// console.log(sortedArr);
// console.log(sortedArr[sortedArr.length - 1]);

const str = "JavaScript is a powerful language";
function word() {
  let strArr = str.split(" ");
  let arr = [];
  arr.push(strArr[0], strArr[1], strArr[2]);
  return arr;
}
console.log(word());