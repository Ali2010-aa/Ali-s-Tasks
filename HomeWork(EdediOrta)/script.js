let prices = [];

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
let num4 = Math.floor(Math.random() * 100);
let num5 = Math.floor(Math.random() * 100);

prices.push(num1, num2, num3, num4, num5);
let result = 0;
for (let i = 0; i < prices.length; i++) {
  result += prices[i];
}

console.log(prices);
console.log(result / prices.length);