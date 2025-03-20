const numbers = [12, 5, 8, 20, 1, 30];

function findNums() {
  let nums = [];
  numbers.sort((a, b) => a - b);
  nums.push(numbers[0], numbers[numbers.length - 1]);
  return nums;
}
console.log(findNums(...numbers));
