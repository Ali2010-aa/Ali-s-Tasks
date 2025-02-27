let numbers = [3, 7, 2, 8, 5];
console.log(numbers);
let result = numbers.map((value) => value + numbers.indexOf(value));
console.log(result);