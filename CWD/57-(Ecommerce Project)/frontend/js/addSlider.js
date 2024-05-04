import { makeUrl } from "./shared/utilities.js";

const addForm = document.getElementById("add-form");

const url = makeUrl("/add-slider");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const img = e.target.img.value;

  // alert
  const imgDiv = document.getElementById("imgDiv");;

  // validation
  const imgField = e.target.img;


  // Reset previous validation states
  imgField.classList.remove("is-invalid", "is-valid");

  imgDiv.innerHTML = "";

  // Check if email, phone number, and name match the expected format
  let valid = true;

  if (!img) {
    imgField.classList.add("is-invalid");
    imgDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter an img URL</p></div>`;
    valid = false;
  } else {
    imgField.classList.add("is-valid");
  }

  if (!valid) {
    // Exit if any field is invalid
    return;
  }

  const date = new Date();
  const today = date.toLocaleDateString();

  const sliderData = {
    date: today,
    img
  };

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(sliderData),
  })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
      if (res.acknowledged) {
        submitDiv.innerHTML = `<div class="mt-2 text-success"><h6>Slider added Successfully</h6></div>`;
        setTimeout(() => {
          window.location.href = "/frontend/html/dashboard.sliders.html";
        }, 1000);
      }
    });
});
