import { makeUrl, useParams } from "./shared/utilities.js";

const shippingForm = document.getElementById("shipping-form");

const url = makeUrl("/shipping-details");

shippingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const { productId } = useParams();

  // alert
  const nameDiv = document.getElementById("nameDiv");
  const emailDiv = document.getElementById("emailDiv");
  const phoneDiv = document.getElementById("phoneDiv");
  const submitDiv = document.getElementById("submitDiv");

  // validation
  const nameField = e.target.name;
  const emailField = e.target.email;
  const phoneField = e.target.phone;

  // Regular expressions for email, phone number, and name validation
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{11}$/;

  // Reset previous validation states
  nameField.classList.remove("is-invalid", "is-valid");
  emailField.classList.remove("is-invalid", "is-valid");
  phoneField.classList.remove("is-invalid", "is-valid");

  nameDiv.innerHTML = "";
  emailDiv.innerHTML = "";
  phoneDiv.innerHTML = "";
  submitDiv.innerHTML = "";

  // Check if email, phone number, and name match the expected format
  let valid = true;

  if (!namePattern.test(name)) {
    nameField.classList.add("is-invalid");
    nameDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter a valid name (only letters and spaces are allowed)</p></div>`;
    valid = false;
  } else {
    nameField.classList.add("is-valid");
  }

  if (!emailPattern.test(email)) {
    emailField.classList.add("is-invalid");
    emailDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter a valid email address</p></div>`;
    valid = false;
  } else {
    emailField.classList.add("is-valid");
  }

  if (!phonePattern.test(phone)) {
    phoneField.classList.add("is-invalid");
    phoneDiv.innerHTML = `<div class="mt-2 text-danger"><p>Please enter a valid phone number (exactly 11 digits)</p></div>`;
    valid = false;
  } else {
    phoneField.classList.add("is-valid");
  }

  if (!valid) {
    // Exit if any field is invalid
    return;
  }

  const date = new Date();
  const today = date.toLocaleDateString();

  const shippingData = {
    name,
    email,
    phone,
    productId,
    date: today,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(shippingData),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.acknowledged) {
        submitDiv.innerHTML = `<div class="mt-2 text-success"><h6>Shipping details added Successfully</h6></div>`;
        setTimeout(() => {
          window.location.href = "/frontend/html/dashboard.html";
        }, 1000);
      }
    });
});
