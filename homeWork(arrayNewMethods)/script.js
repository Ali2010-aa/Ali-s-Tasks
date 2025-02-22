let nums = [54, 22, 57, 21, 64, 42, 24];
let filteredArr = nums.filter((value) => value > 50);
console.log(filteredArr);

let result = filteredArr.forEach((nums) => {
  console.log(nums * 3);
});
