let word1 = prompt("Axtarmaq istediyiniz ilk soz:");
let word2 = prompt("Axtarmaq istediyiniz ikinci soz:");
let word3 = prompt("Axtarmaq istediyiniz ucunncu soz:");

let words = [];
words.push(word1, word2, word3);

const sentence = "Mən kitab oxumağı sevirəm.Musiqi də maraqlıdır";

words.forEach((value) =>  {
    sentence.includes(value) ? console.log(`${value} cumle daxilinde var`) :  console.log(`${value} cumle daxilinde yoxdur`);
});