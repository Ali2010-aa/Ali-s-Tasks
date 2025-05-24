// let nums = [5, 7, 11, 28];
// function toplama() {
//   return nums.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(toplama());

// let nums = [35, 12, 90, 3, 27];
// let newArr = nums.sort((a, b) => a - b);
// console.log(newArr);

// let arr = [0 , 6, 10, -5, 1, -99, 99];
// let negativeNums = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= 0) {
//     negativeNums.push(arr[i]);
//   }
// }
// console.log(negativeNums);

let arr = [3, 5, 7, 9];
let usersNum = +prompt("Xahis edirik 1-10 araliqinda bir eded daxil edin:");
if (usersNum < 0 || usersNum == 0) {
  alert("Xahis olunur 1-10 araliqinda secin!");
} else if (arr.includes(usersNum)) {
  alert("Daxil etdiyiniz eded array daxilinde var");
} else {
  arr.push(usersNum);
  alert(`daxil etdiyiniz eded array'da olmadigindan array'a daxil edildi ${arr}`)
}
