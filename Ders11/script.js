let num = +prompt("bir eded daxil edin:");

function check(num){
    if(num % 2 == 0){
        alert("Daxil etdiyiniz eded cutdur.")
    }
    else if(num % 2 == 1){
        alert("Daxil etdiyiniz eded tekdir")
    }
    else{
        alert("Xahis edirik eded daxil edin :)")
    }
}
console.log(check(num));