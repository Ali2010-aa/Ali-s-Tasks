let number = prompt("Bir eded daxil edin!")

function ededToplama(a) {
    if(isNaN(number) || number < 0){
        console.log("Xahis edirik eded daxil edin");
    }
    else{
        let result = 0;
    for(let i = 0; i < number.length; i++){
            result += a % 10
            a = Math.floor(a / 10)
        }
        return result;
    }
}
console.log(ededToplama(number));