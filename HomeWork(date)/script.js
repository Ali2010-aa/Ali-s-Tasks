let months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];
let days = [
  "Bazar",
  "Bazar ertəsi",
  "Çərşənbə axşamı",
  "Çərşənbə",
  "Cümə axşamı",
  "Cümə",
  "Şənbə",
  "Bazar",
];

let d = new Date();

let date = document.getElementById("tarix");
let year = document.getElementById("tarix");
let month = document.getElementById("tarix");
let day = document.getElementById("tarix");
let hour = document.getElementById("tarix");

function findDate() {
  date.innerHTML = `${days[d.getDay()]} ${d.getDate()} ${
    months[d.getMonth()]
  } ${d.getFullYear()}`;
}
function findYear() {
  year.innerHTML = d.getFullYear();
}
function findMonth() {
  year.innerHTML = months[d.getMonth()];
}
function findDay() {
  year.innerHTML = days[d.getDay()];
}
function findHour() {
  year.innerHTML = `${d.getHours()}:${d.getMinutes()}`;
}
