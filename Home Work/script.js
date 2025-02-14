let arr = [];
let num1 = +prompt("1-ci ededi daxil edin!");
let num2 = +prompt("2-ci ededi daxil edin!");
let num3 = +prompt("3-cu ededi daxil edin!");
let num4 = +prompt("4-cu ededi daxil edin!");
let num5 = +prompt("5-ci ededi daxil edin!");

arr.push(num1, num2, num3, num4, num5);

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}
alert(`En boyuk eded:${max}`);
alert(`En kicik eded:${min}`);
