let task1_text = document.getElementById("task1-text");
let task1_button = document.getElementById("task1-button");
function task1() {
  task1_text.innerHTML = "JavaScript";
  task1_button.innerHTML = "Text changed";
}

let task2_text = document.getElementById("task2-text");
let task2_button = document.getElementById("task2-button");
function task2() {
  task2_text.style.color = "red";
  task2_button.innerHTML = "Text color changed";
  task2_button.style.backgroundColor = "red";
  task2_button.style.color = "white";
  task2_button.style.border = "none";
}

function task3() {
  alert("The button was clicked :)");
}

let task4_text = document.getElementById("task4-input");
function task4() {
  alert(`User's Name : ${task4_text.value}`);
}

let task5_box = document.querySelector(".task-5-box");
function task5() {
  task5_box.style.color = "white";
  task5_box.style.backgroundColor = "black";
  task5_box.style.width = "200px";
  task5_box.style.border = "5px solid grey";
}

let task6_input = document.getElementById("task6-input");
let task6_items = document.querySelectorAll("#carList li");

task6_input.addEventListener("input", function () {
  let filter = task6_input.value.toLowerCase();

  task6_items.forEach((item) => {
    let text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

let task7_background = document.querySelector(".body");

function dark() {
  task7_background.style.backgroundColor = "black";
  task7_background.style.color = "white";
}
function light() {
  task7_background.style.backgroundColor = "white";
  task7_background.style.color = "black";
}
