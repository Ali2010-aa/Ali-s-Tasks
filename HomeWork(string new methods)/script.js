function myFunc(text){
let nameSurname = text.trim();
let nameSurnameArr = nameSurname.split(" ");
return nameSurnameArr[nameSurnameArr.length - 1]
}
console.log(`Sizin Soyadınız : ${myFunc("      Ali Ismayilzade      ")}`);