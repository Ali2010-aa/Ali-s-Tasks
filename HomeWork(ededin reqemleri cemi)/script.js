const numbers = [842, 921, 631, 542, 122];
function toplama(a) {
  let result = 0;
  while (a > 0) {
    result += a % 10;
    a = Math.floor(a / 10);
  }
  return result;
}

let array = numbers.map((value) => toplama(value));
console.log(array);
