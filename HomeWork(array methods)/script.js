let taskNomresi = +prompt("Tapsiriqin nomresini daxil edin:");
switch (taskNomresi) {
  case 1:
    let students = ["fazil", "jasmin", "eli"];
    let newArr = students.sort((a, b) => a.length - b.length);
    console.log(newArr[0]);
    break;

  case 2:
    let nums1 = [];
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let num3 = Math.floor(Math.random() * 10);
    let num4 = Math.floor(Math.random() * 10);
    nums1.push(num1, num2, num3, num4);
    let sum = 0;
    function edediOrta() {
      for (let i = 0; i < nums1.length; i++) {
        sum += nums1[i];
      }
      return sum / nums1.length;
    }
    console.log(nums1);
    console.log(edediOrta());
    break;
  case 3:
    let nums = [];
    for (let i = 0; i < 7; i++) {
      let num = +prompt("1-100 araliqinda bir eded daxil edin:");
      nums.push(num);
    }
    let sortedArr = nums.sort((a, b) => a - b);
    console.log(
      `array'deki en kicik eded:${sortedArr[0]} , en boyuk eded:${
        sortedArr[sortedArr.length - 1]
      }`
    );
    break;
  default:
    alert("bele bir taspiriq nomresi yoxdur!");
    break;
}
