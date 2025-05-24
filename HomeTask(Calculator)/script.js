let netice = "";
for (let i = 1; i < 11; i++) {
  netice += `<h2>${i} cədvəli</h2>`;
  for (let j = 1; j < 11; j++) {
    let result = i * j;
    netice += `${i} * ${j} = ${result}`;
    netice += "<br>";
  }
  netice += "<br>";
}

document.getElementById("calculator").innerHTML = netice;
