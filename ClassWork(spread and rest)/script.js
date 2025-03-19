// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr1, ...arr2];
// console.log(result);

// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4));

function longestWord(...fruits) {
  fruits.sort((a, b) => b.length - a.length);
  return fruits[0];
}
console.log(longestWord("banan", "alma", "ananas", "kivi"));
