// let display = document.getElementById("inputBox");
// let btns = document.querySelectorAll(".btns button");

// for (let i = 0; i < btns.length; i++) {
//   let btn = btns[i];

//   btn.addEventListener("click", (e) => {
//     let total = e.target.innerText;
//     if (total === "=") {
//       display.value = eval(display.value).toFixed(2);
//     } else if (total === "AC") {
//       display.value = "";
//     } else {
//       display.value += total;
//     }
//   });
// }

let display = document.getElementById("inputBox");
let btns = document.querySelectorAll(".btns button");

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];

  btn.addEventListener("click", (e) => {
    let total = e.target.innerText;
    if (total === "=") {
      let result = eval(display.value).toFixed(2);
      display.value = result;
    } else if (total === "AC") {
      display.value = "";
    } else if (total === "C") {
      display.value = display.value.slice(0, -1); // Remove the last character
    } else {
      display.value += total;
    }
  });
}
