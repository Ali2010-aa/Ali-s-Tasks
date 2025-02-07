let word = prompt("Bir soz daxil edin!");
let repeat = +prompt("Tekrarlanma sayi daxil edin!");
function wordRepeat(word , repeat) {
    let result = "";
    for(let i = 0; i < repeat; i++) {
        result += word
    }
    return result;
};
console.log(wordRepeat(word, repeat));

// let word = prompt("Bir soz daxil edin")
// function length(a){
//     return(a);
// }
// console.log(length(word.length));