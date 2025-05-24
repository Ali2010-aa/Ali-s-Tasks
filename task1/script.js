// let num = +prompt("Eded daxil edin:")

// if(num > 0){
// console.log("eded 0-dan boyukdur");
// }
// else if(num < 0){
// console.log("Eded 0-dan kicikdir");
// }
// else{
//     console.log("Eded 0-dir");
// }


let num1 = +prompt("1ci ededi daxil edin:");
let num2 = +prompt("2ci ededi daxil edin:");
let num3 = +prompt("3ci ededi daxil edin:");

if(num1 > num2 & num1 > num3){
    alert(`En boyuk eded ${num1}-dir`);
}
else if(num2 > num1 & num2 > num3){
    alert(`En boyuk eded ${num2}-dir`);
}
else{
    alert(`En boyuk eded ${num3}-dir`);
}