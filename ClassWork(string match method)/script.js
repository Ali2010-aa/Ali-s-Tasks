// let text = "JS güclü dildir. JS populyardır. JS öyrənirik.";

// let result = text.match(/JS/g);
// console.log(result.length);

// let text = "JavaScript proqramlaşdırma dilidir.";
// let result = text.includes("dil");
// console.log(result);

let text = "Biz JavaScript proqramlaşdırma dilini öyrənirik.";
let search = prompt("axtarmaq istediyiniz soz:");

text.includes(search) ? alert(text.indexOf(search)) : alert("soz cumle daxilinde tapilmadi");