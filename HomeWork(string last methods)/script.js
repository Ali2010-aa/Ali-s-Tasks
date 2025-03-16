let word1 = prompt("Axtarmaq istediyiniz ilk soz:");
let word2 = prompt("Axtarmaq istediyiniz ikinci soz:");
let word3 = prompt("Axtarmaq istediyiniz ucunncu soz:");

let words = [];
words.push(word1, word2, word3);

const sentence = "Mən kitab oxumağı sevirəm.Musiqi də maraqlıdır";

sentence.includes(words[0]) ? alert(`${words[0]} cumle daxilinde var`) :  alert(`${words[0]} cumle daxilinde yoxdur`);
sentence.includes(words[1]) ? alert(`${words[1]} cumle daxilinde var`) :  alert(`${words[1]} cumle daxilinde yoxdur`);
sentence.includes(words[2]) ? alert(`${words[2]} cumle daxilinde var`) :  alert(`${words[2]} cumle daxilinde yoxdur`);


