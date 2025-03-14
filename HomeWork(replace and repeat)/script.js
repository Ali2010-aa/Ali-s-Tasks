// let sentence = "Mən proqramlaşdırmanı sevirəm";
// let result = sentence.replaceAll(/[a,ı,o,u,e,ə,i,ö,ü]/g , "*");
// console.log(result);

let isare = prompt("bir emoji daxil edin:");
let say = +prompt("tekrarlanma sayi daxil edin:")
function emojiGenerator(emoji , count){
let result = emoji.repeat(count);
return result
}
alert(emojiGenerator(isare , say));