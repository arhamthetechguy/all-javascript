const display = document.getElementById("inputBox");
const btns = document.querySelectorAll(".btns button");

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];

  btn.addEventListener("click", (e) => {
    let total = e.target.innerText;

    if (total === "=") {
      let result = eval(display.value);
      display.value = result;
    } else if (total === "AC") {
      display.value = "";
    } else if (total === "C") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += total;
    }
  });
}
