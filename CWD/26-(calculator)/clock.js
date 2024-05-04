let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");

let date = new Date();

setInterval(() => {
  let date = new Date();
  let dseconds = date.getSeconds();
  let dminutes = date.getMinutes();
  let dhours = date.getHours();

  seconds.innerText = dseconds;
  minutes.innerText = dminutes;
  hours.innerText = dhours;
}, 1000);
